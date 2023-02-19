import { Component, Input, OnInit } from "@angular/core";

/**
 * The general information
 */
interface IGeneralInformation {
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
interface IDownloadStatistic {
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

    /**
     * Load the data
     */
    async ngOnInit(): Promise<void> {
        // Query the necessary information
        const generalRes = await fetch(`https://registry.npmjs.com/${this.name}`);
        const downloadRes = await fetch(`https://api.npmjs.org/downloads/range/last-year/${this.name}`);
        if (generalRes.status !== 200 || downloadRes.status !== 200) return;
        const generalInfo = await generalRes.json();
        const downloadInfo = await downloadRes.json();

        // Prepare the information for visualization
        this.general = {
            name: generalInfo.name,
            description: generalInfo.description,
            url: generalInfo.homepage,
            license: generalInfo.license,
            version: generalInfo["dist-tags"].latest,
            created: new Date(generalInfo.time.created),
            modified: new Date(generalInfo.time.modified),
        };
        let dayCounter = 0;
        let downloadCounter = 0;
        for (let i = downloadInfo.downloads.length - 1; i > 0; i--) {
            dayCounter++;
            downloadCounter += downloadInfo.downloads[i].downloads;
            if (dayCounter === 7 || i === 0) {
                this.downloads.push({
                    downloads: downloadCounter,
                    from: new Date(downloadInfo.downloads[i].day),
                    to: new Date(downloadInfo.downloads[i + dayCounter - 1].day),
                });
                dayCounter = 0;
                downloadCounter = 0;
            }
        }
        console.log(this.downloads);
    }
}
