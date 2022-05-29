import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    /**
     * True if the header is toggled
     */
    public toggled = false;

    /**
     * Constructor
     */
    constructor(private readonly router: Router) {
        // Remove toggle state every time a route changes
        this.router.events.subscribe(() => (this.toggled = false));
    }
}
