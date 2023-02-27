import { Component, Input, OnInit } from "@angular/core";
import { NpmService } from "../../../../services/npm.service";

/**
 * The general information
 */
export interface IGeneralInformation {
    /** The name of the package */
    name: string;
    /** The description */
    description: string;
    /** The link to the homepage/repo */
    url: string;
    /** The license */
    license: string;
    /** The current version */
    version: string;
    /** The creation date */
    created: Date;
    /** The date when it was last modified */
    modified: Date;
}

/**
 * The download statistic for a given range
 */
export interface IDownloadStatistic {
    /** The starting point of the range */
    from: Date;
    /** The ending point of the range */
    to: Date;
    /** The download count for the range */
    downloads: number;
}

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
    }
}
