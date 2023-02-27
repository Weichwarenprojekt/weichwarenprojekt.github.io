import { Component, Input, OnInit } from "@angular/core";
import { IDownloadStatistic, IGeneralInformation, NpmService } from "../../../../services/npm.service";

@Component({
    selector: "app-github-project",
    templateUrl: "./github-project.component.html",
    styleUrls: ["./github-project.component.scss"],
})
export class GithubProjectComponent implements OnInit {
    /** The name of the project */
    @Input() name: string = "";

    /** The general information for the package */
    public general?: IGeneralInformation;

    /** The download information for the package */
    public downloads: IDownloadStatistic[] = [];

    constructor(private readonly npmService: NpmService) {}

    /**
     * Load the data
     */
    async ngOnInit(): Promise<void> {
        const { info, statistics = [] } = await this.npmService.getPackageInformation(this.name);
        this.general = info;
        this.downloads = statistics;

        console.log(this.downloads);
        console.log(this.general);
    }
}
