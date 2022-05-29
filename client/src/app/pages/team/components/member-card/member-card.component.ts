import { Component, Input } from "@angular/core";

@Component({
    selector: "app-member-card",
    templateUrl: "./member-card.component.html",
    styleUrls: ["./member-card.component.scss"],
})
export class MemberCardComponent {
    /**
     * The shown image
     */
    @Input() image = "assets/img/team/user.png";
    /**
     * The name of the member
     */
    @Input() name = "Name";
    /**
     * The member specific quote
     */
    @Input() quote = "Quote";
    /**
     * The degree
     */
    @Input() degree = "Bachelor Of Art";
    /**
     * The link to the github account
     */
    @Input() github = "";
    /**
     * The link to the linked in profile
     */
    @Input() linkedin = "https:////www.linkedin.com/";
}
