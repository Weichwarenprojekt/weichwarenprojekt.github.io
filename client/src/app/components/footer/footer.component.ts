import { Component } from "@angular/core";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
    /**
     * Returns the current year
     */
    public currentYear = new Date().getFullYear();
}
