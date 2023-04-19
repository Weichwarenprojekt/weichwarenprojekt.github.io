import { Component } from "@angular/core";
import licenses from "../../../assets/3rdpartylicenses.json";
import { IPackageInfo } from "@weichwarenprojekt/license-reporter";

@Component({
    selector: "app-third-party",
    templateUrl: "./third-party.component.html",
    styleUrls: ["./third-party.component.scss"],
})
export class ThirdPartyComponent {
    /**
     * The licenses
     */
    public licenses: IPackageInfo[] = licenses;
}
