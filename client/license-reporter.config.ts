import { IReporterConfiguration } from "@weichwarenprojekt/license-reporter";

export const configuration: Partial<IReporterConfiguration> = {
    output: "./src/assets/3rdpartylicenses.json",
    ignore: ["server", "node_modules/client"],
    overrides: [
        {
            name: "@npmcli/fs",
            url: "https://github.com/npm/fs",
        },
        {
            name: "minipass-collect",
            url: "https://github.com/isaacs/minipass-collect",
        },
        {
            name: "minipass-pipeline",
            url: "https://github.com/isaacs/minipass-pipeline",
        },
    ],
};
