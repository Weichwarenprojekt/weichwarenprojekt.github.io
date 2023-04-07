import { Component, Input, OnInit } from "@angular/core";
import { IDownloadStatistic, IGeneralInformation, NpmService } from "../../../../services/npm.service";
import { ActiveElement, Chart, ChartConfiguration, ChartEvent, ChartOptions } from "chart.js";

@Component({
    selector: "app-open-source-project",
    templateUrl: "./open-source-project.component.html",
    styleUrls: ["./open-source-project.component.scss"],
})
export class OpenSourceProjectComponent implements OnInit {
    /** The name of the project */
    @Input() name: string = "";

    /** The general information for the package */
    public general?: IGeneralInformation;

    /** The download information for the package */
    public downloads: IDownloadStatistic[] = [];

    /**
     * The line chart data
     */
    public npmDownloadChartConfig?: ChartConfiguration<"line">["data"];
    /**
     * The options used for the line chart
     */
    public npmDownloadsChartOptions?: ChartOptions<"line">;

    public selectedDataPoint?: IDownloadStatistic;

    constructor(private readonly npmService: NpmService) {}

    /**
     * Load the data
     */
    async ngOnInit(): Promise<void> {
        const { info, statistics = [] } = await this.npmService.getPackageInformation(this.name);
        this.general = info;
        this.downloads = statistics;

        this.npmDownloadChartConfig = this.getChartData();
        this.npmDownloadsChartOptions = this.getChartOptions();
    }

    private getChartData(): ChartConfiguration<"line">["data"] {
        return {
            labels: this.downloads.map((entry) => entry.from.toLocaleDateString()),
            datasets: [
                {
                    label: "Downloads",
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
                    hitRadius: 10,
                    hoverRadius: 6,
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
                    displayColors: false,
                    intersect: false,
                    mode: "nearest",
                },
            },
            onHover: (event: ChartEvent, elements: ActiveElement[], chart: Chart) => {
                // if (elements.length === 0) {
                //     this.selectedDataPoint = this.downloads[this.downloads.length - 1];
                // } else {
                //     this.selectedDataPoint = this.downloads[elements[0].datasetIndex];
                // }
                // console.log("selected point", this.selectedDataPoint);

                console.log(event);

                // console.log(elements);
            },
        };
    }
}
