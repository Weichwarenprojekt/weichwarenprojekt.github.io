import { Component, Input } from "@angular/core";

@Component({
    selector: "app-focus-card",
    templateUrl: "./focus-card.component.html",
    styleUrls: ["./focus-card.component.scss"],
})
export class FocusCardComponent {
    /**
     * The title of the focus card
     */
    @Input() title = "";
    /**
     * The description of the focus card
     */
    @Input() description = "";
    /**
     * The image
     */
    @Input() image = "";
}
