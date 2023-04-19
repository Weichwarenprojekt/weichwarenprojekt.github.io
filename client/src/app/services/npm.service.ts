import { Injectable } from "@angular/core";

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
    /**
     * The keywords of the package
     */
    keywords: string[];
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

@Injectable({
    providedIn: "root",
})
export class NpmService {
    constructor() {}

    /**
     * Returns npm package information about the provided project
     * @param projectName The project name
     */
    public async getPackageInformation(
        projectName: string,
    ): Promise<{ info?: IGeneralInformation; statistics?: IDownloadStatistic[] }> {
        // Query the necessary information
        const [generalRes, downloadRes] = await Promise.all([
            fetch(`https://registry.npmjs.com/${projectName}`),
            fetch(`https://api.npmjs.org/downloads/range/last-year/${projectName}`),
        ]);

        if (generalRes.status !== 200 || downloadRes.status !== 200) return {};

        const generalInfo = await generalRes.json();
        const downloadInfo = await downloadRes.json();

        const info = {
            name: generalInfo.name,
            description: generalInfo.description,
            url: generalInfo.homepage,
            license: generalInfo.license,
            version: generalInfo["dist-tags"].latest,
            created: new Date(generalInfo.time.created),
            modified: new Date(generalInfo.time.modified),
            keywords: generalInfo.keywords,
        };

        let dayCounter = 0;
        let downloadCounter = 0;
        const downloads = [] as IDownloadStatistic[];

        for (let i = downloadInfo.downloads.length - 1; i > 0; i--) {
            dayCounter++;
            downloadCounter += downloadInfo.downloads[i].downloads;
            if (dayCounter === 7 || i === 0) {
                downloads.push({
                    downloads: downloadCounter,
                    from: new Date(downloadInfo.downloads[i].day),
                    to: new Date(downloadInfo.downloads[i + dayCounter - 1].day),
                });
                dayCounter = 0;
                downloadCounter = 0;
            }
        }

        // reversing the downloads so that the latest download stat is located at the end of the array
        return { info, statistics: downloads.reverse() };
    }
}
