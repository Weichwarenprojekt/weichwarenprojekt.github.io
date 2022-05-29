import { Component, ElementRef, Input, OnDestroy, ViewChild } from "@angular/core";

@Component({
    selector: "app-question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"],
})
export class QuestionComponent implements OnDestroy {
    /**
     * The reference to the question div
     */
    @ViewChild("questionDiv") questionDiv?: ElementRef<HTMLDivElement>;
    /**
     * The question to be shown
     */
    @Input() question = "";
    /**
     * True if the question is expanded
     */
    public expanded = false;
    /**
     * The window width
     */
    private previousWidth = 0;

    /**
     * Constructor
     */
    constructor() {
        // Collapse on resize
        window.addEventListener("resize", this.onResize);
        this.previousWidth = window.innerWidth;
    }

    /**
     * Remove resize listener
     */
    ngOnDestroy(): void {
        window.removeEventListener("resize", this.onResize);
    }

    /**
     * Toggle the question card
     */
    public toggle(expanded: boolean): void {
        const questionDiv = this.questionDiv!.nativeElement;
        this.expanded = expanded;
        if (this.expanded) questionDiv.style.height = `${questionDiv.scrollHeight}px`;
        else questionDiv.style.height = `5rem`;
    }

    /**
     * Collapse on resize
     */
    private onResize = (): void => {
        if (this.previousWidth === window.innerWidth) return;
        this.previousWidth = window.innerWidth;
        this.toggle(false);
    };
}
