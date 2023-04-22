import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
    /**
     * True if the header is toggled
     */
    public toggled = false;
    /**
     * The array of subscriptions
     */
    private subscriptions: Subscription[] = [];

    /**
     * Constructor
     */
    constructor(private readonly router: Router) {}

    ngOnInit(): void {
        // Remove toggle state every time a route changes
        this.subscriptions.push(this.router.events.subscribe(() => (this.toggled = false)));
    }

    ngOnDestroy(): void {
        // clear subscription
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
}
