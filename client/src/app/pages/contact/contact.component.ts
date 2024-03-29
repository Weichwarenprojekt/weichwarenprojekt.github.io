import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
    /**
     * True if the form is currently loading
     */
    public loading = false;
    /**
     * The mailto link
     */
    public mailtoLink: string;
    /**
     * The link timeout that closes the tab if it is empty
     * @private
     */
    private mailtoLinkTimeout?: NodeJS.Timeout;
    /**
     * The loading timeout id
     * @private
     */
    private loadingTimeoutId?: NodeJS.Timeout;
    /**
     * Constructor
     */
    constructor(private readonly translate: TranslateService) {
        const subject = translate.instant("contact.email.subject");
        this.mailtoLink = `mailto:info@weichwarenprojekt.de?subject=${subject}`;
    }

    /**
     * Opens the mailto link
     */
    public openMailtoLink(): void {
        clearTimeout(this.loadingTimeoutId);
        this.loading = true;
        this.loadingTimeoutId = setTimeout(() => (this.loading = false), 1000);

        // since some clients may have set their email program to the browser (e.g. Outlook online) we need to open the
        // mailto link in a new tab.
        const windowRef = window.open(this.mailtoLink, "_blank");
        windowRef?.focus();
        clearTimeout(this.mailtoLinkTimeout);
        // setting a timeout to check if the newly opened window has the focus. If not it can be closed since the user is using a non-browser mail client
        this.mailtoLinkTimeout = setTimeout(function () {
            if (!windowRef?.document.hasFocus()) {
                windowRef?.close();
            }
        }, 500);
    }
}
