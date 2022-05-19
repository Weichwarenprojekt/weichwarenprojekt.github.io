import { Component, Input } from "@angular/core";

@Component({
    selector: "app-intro-card",
    templateUrl: "./intro-card.component.html",
    styleUrls: ["./intro-card.component.scss"],
})
export class IntroCardComponent {
    /**
     * The title of the intro card
     */
    @Input() title = "";
    /**
     * The description of the intro card
     */
    @Input() description = "";
    /**
     * The image
     */
    @Input() image = "";
}
