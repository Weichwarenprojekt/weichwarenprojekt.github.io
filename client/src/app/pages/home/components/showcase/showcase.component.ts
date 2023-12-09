import { Component, Input } from "@angular/core";

@Component({
    selector: "app-showcase",
    templateUrl: "./showcase.component.html",
    styleUrls: ["./showcase.component.scss"],
})
export class ShowcaseComponent {
    /**
     * The title of the showcase
     */
    @Input() title = "";
    /**
     * The description of the showcase
     */
    @Input() description = "";
    /**
     * The image
     */
    @Input() image = "";
    /**
     * The link to the showcase website
     */
    @Input() url = "";
    /**
     * True if the project is a student projecgt
     */
    @Input() isStudentProject = false;
}
