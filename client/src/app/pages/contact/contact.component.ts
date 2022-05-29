import { Component } from "@angular/core";
import { ContactApiModel } from "../../../../../server/src/common/contact.api-model";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
    /**
     * Name of the user (mandatory)
     */
    public name = "";
    /**
     * Company name (optional)
     */
    public company = "";
    /**
     * E-Mail (mandatory)
     */
    public email = "";
    /**
     * The contact message
     */
    public message = "";
    /**
     * The shown error message
     */
    public error = "";
    /**
     * True if the form is currently loading
     */
    public loading = false;
    /**
     * True if the user agrees to the privacy policy
     */
    public privacyPolicyChecked = false;

    /**
     * Constructor
     */
    constructor(private readonly translate: TranslateService) {}

    /**
     * Try to send an e-mail
     */
    public sendEmail(): void {
        if (this.loading) return;

        // Send the email
        this.error = "";
        this.loading = true;
        fetch("https://api.weichwarenprojekt.de/v1/email/send", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(
                new ContactApiModel(this.name, this.company, this.email, this.message, this.translate.currentLang),
            ),
        })
            .then((res) => {
                if (res.status >= 300) {
                    this.error = this.translate.instant("contact.couldNotSend");
                } else {
                    this.message = "";
                }
                this.loading = false;
            })
            .catch(() => {
                this.error = this.translate.instant("contact.couldNotSend");
                this.loading = false;
            });
    }
}
