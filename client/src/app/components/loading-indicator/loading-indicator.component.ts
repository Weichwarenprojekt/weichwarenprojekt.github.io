import { Component, Input, OnInit } from "@angular/core";

/**
 * The type of the loading indicator
 */
export enum LoadingIndicatorType {
    H1 = "h1",
    H2 = "h2",
    H3 = "h5",
    TEXT = "text",
    DIV = "div",
}

/**
 * Component that displays a loading element
 */
@Component({
    selector: "app-loading-indicator",
    templateUrl: "./loading-indicator.component.html",
    styleUrls: ["./loading-indicator.component.scss"],
})
export class LoadingIndicatorComponent implements OnInit {
    /**
     * The type of the loading indicator
     */
    @Input()
    public indicatorType = LoadingIndicatorType.DIV;
    /**
     * The amount of rows that should be displayed - default is 1 row
     */
    @Input()
    public rows: number = 1;
    /**
     * Internal variable that is used to create this.rows amount of rows in the template
     * @protected
     */
    protected nRows: number[] = [];

    ngOnInit(): void {
        this.nRows = Array(this.rows)
            .fill(0)
            .map((x, i) => i);
    }
}
