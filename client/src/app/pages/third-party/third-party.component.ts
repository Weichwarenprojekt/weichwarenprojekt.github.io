import { Component } from "@angular/core";
import licenses from "./rsc/licenses.json";

@Component({
    selector: "app-third-party",
    templateUrl: "./third-party.component.html",
    styleUrls: ["./third-party.component.scss"],
})
export class ThirdPartyComponent {
    /**
     * The licenses
     */
    public licenses: {
        name: string;
        link: string;
        license: string;
    }[] = licenses;
}
