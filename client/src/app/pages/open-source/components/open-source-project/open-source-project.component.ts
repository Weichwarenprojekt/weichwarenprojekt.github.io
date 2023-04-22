import { Component, HostListener, Input, OnInit, ViewChild } from "@angular/core";
import { IDownloadStatistic, IGeneralInformation, NpmService } from "../../../../services/npm.service";
import {
    BubbleDataPoint,
    Chart,
    ChartConfiguration,
    ChartOptions,
    ChartTypeRegistry,
    Point,
    TooltipModel,
} from "chart.js";
import { LoadingIndicatorType } from "../../../../components/loading-indicator/loading-indicator.component";
import { DatePipe } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";
import { BaseChartDirective } from "ng2-charts";

@Component({
    selector: "app-open-source-project",
    templateUrl: "./open-source-project.component.html",
    styleUrls: ["./open-source-project.component.scss"],
})
export class OpenSourceProjectComponent implements OnInit {
    /**
     * The name of the project
     */
    @Input() name: string = "";
    /**
     * The general information for the package
     */
    public general?: IGeneralInformation;
    /**
     * The download information for the package
     */
    private downloads: IDownloadStatistic[] = [];
    /**
     * The line chart data
     */
    public npmDownloadChartConfig?: ChartConfiguration<"line">["data"];
    /**
     * The options used for the line chart
     */
    public npmDownloadsChartOptions?: ChartOptions<"line">;
    /**
     * The current download count
     */
    public currentDownloadData = { downloads: 0, date: "" };
    /**
     * True if the loading animation should be shown
     */
    public isLoading = true;
    /**
     * The date pipe
     * @private
     */
    private datePipe: DatePipe | undefined;
    /**
     * The date format used for displaying dates
     * @private
     */
    private readonly DATE_FORMAT = "dd-MM-YYYY";
    /**
     * Internal reference to the Loading Indicator Type so that it can be used in the template
     * @protected
     */
    protected readonly LoadingIndicatorType = LoadingIndicatorType;
    /**
     * The reference to the actual chart canvas
     */
    @ViewChild(BaseChartDirective)
    public chart?: BaseChartDirective;

    constructor(private readonly npmService: NpmService, private readonly translate: TranslateService) {}

    /**
     * Load the data
     */
    async ngOnInit(): Promise<void> {
        // init date pipe with the current locale
        this.datePipe = new DatePipe(this.translate.currentLang);
        const { info, statistics = [] } = await this.npmService.getPackageInformation(this.name);
        this.isLoading = false;
        this.general = info;
        this.downloads = statistics;

        const currentDownloadData = statistics[statistics.length - 1];
        if (currentDownloadData)
            this.currentDownloadData = {
                downloads: currentDownloadData.downloads,
                date: this.translate.instant("openSource.weeklyDownloads"),
            };
        this.npmDownloadChartConfig = this.getChartData();
        this.npmDownloadsChartOptions = this.getChartOptions();
    }

    /**
     * When resizing the window we need to redraw the chart to avoid scaling issues
     */
    @HostListener("window:resize", ["$event"])
    public onResize() {
        this.chart?.chart?.resize();
    }

    /**
     * Opens the package url in a new tab
     * @param packageUrl
     */
    public onClickPackage(packageUrl: string) {
        window.open(packageUrl, "_blank");
    }

    /**
     * Returns the chart configuration for the download chart data
     * @private
     */
    private getChartData(): ChartConfiguration<"line">["data"] {
        return {
            labels: this.downloads.map((entry) => this.getDateDisplayString(entry.from, entry.to)),
            datasets: [
                {
                    label: "",
                    data: this.downloads.map((entry) => entry.downloads),
                    tension: 0.4,
                    fill: "origin",
                    backgroundColor: "#f3ac6b",
                    borderColor: "#f77f00",
                    pointBackgroundColor: "#f77f00",
                    borderJoinStyle: "round",
                },
            ],
        };
    }

    /**
     * Returns te chart options for the line chart
     * @private
     */
    private getChartOptions(): ChartOptions<"line"> {
        return {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    ticks: {
                        display: false,
                    },
                    grid: {
                        display: false,
                    },
                },
                y: {
                    display: false,
                    ticks: {
                        display: false,
                    },
                    position: "right",
                    grid: {
                        display: false,
                    },
                },
            },
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 5,
                    hoverRadius: 0,
                },
            },
            clip: false,
            layout: {
                padding: {
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10,
                },
            },
            plugins: {
                tooltip: {
                    enabled: false,
                    displayColors: false,
                    intersect: false,
                    mode: "x",
                    external: this.externalTooltipHandler.bind(this),
                },
            },
        };
    }

    /**
     * Returns the tooltip div from the charts parent. If no div present, an error is thrown
     * @param chart The chart reference
     * @private
     */
    private getTooltip(
        chart: Chart<keyof ChartTypeRegistry, (number | Point | [number, number] | BubbleDataPoint | null)[], unknown>,
    ): HTMLElement {
        const tooltip = chart.canvas.parentNode?.querySelector("#currentPos");
        if (tooltip === null || tooltip === undefined) throw new Error("Couldn't find tooltip div");
        return tooltip as HTMLElement;
    }

    /**
     * Tooltip handler which updates the download count and draws the
     * @param context
     * @private
     */
    private externalTooltipHandler(context: {
        chart: Chart<keyof ChartTypeRegistry, (number | Point | [number, number] | BubbleDataPoint | null)[], unknown>;
        tooltip: TooltipModel<"line">;
    }) {
        // Tooltip Element
        const { chart, tooltip } = context;
        const tooltipEl = this.getTooltip(chart);
        const downloadCount = chart.canvas.parentNode?.querySelector("#downloadCountText");
        const downloadDateRange = chart.canvas.parentNode?.querySelector("#currentDateRange");

        if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = String(0);
            if (downloadCount) downloadCount.textContent = String(this.currentDownloadData.downloads);
            if (downloadDateRange) downloadDateRange.textContent = String(this.currentDownloadData.date);
            return;
        }

        if (downloadCount) downloadCount.textContent = tooltip.body[0].lines[0].toString();
        if (downloadDateRange) downloadDateRange.textContent = tooltip.title[0];

        const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;
        // Display and position
        tooltipEl.style.opacity = String(1);
        tooltipEl.style.left = positionX + tooltip.caretX + "px";
        tooltipEl.style.top = positionY + tooltip.caretY + "px";
    }

    private getDateDisplayString(from: Date, to: Date) {
        return `${this.datePipe?.transform(from, this.DATE_FORMAT)} - ${this.datePipe?.transform(
            to,
            this.DATE_FORMAT,
        )}`;
    }
}
