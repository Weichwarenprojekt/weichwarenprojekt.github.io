import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-checkbox",
    templateUrl: "./checkbox.component.html",
    styleUrls: ["./checkbox.component.scss"],
})
export class CheckboxComponent {
    /**
     * True if the checkbox is toggled
     */
    @Input() toggled = false;
    /**
     * Emits new values of "toggled"
     */
    @Output() toggledChange = new EventEmitter<boolean>();

    /**
     * Emits new value
     */
    public onClick(): void {
        this.toggled = !this.toggled;
        this.toggledChange.emit(this.toggled);
    }
}
