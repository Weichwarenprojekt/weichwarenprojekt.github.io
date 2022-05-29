import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-data-protection",
    templateUrl: "./data-protection.component.html",
    styleUrls: ["./data-protection.component.scss"],
})
export class DataProtectionComponent {
    /**
     * Constructor
     */
    constructor(public readonly translate: TranslateService) {}
}
