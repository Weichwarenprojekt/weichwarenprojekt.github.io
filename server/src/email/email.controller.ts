import { Body, Controller, Post } from "@nestjs/common";
import { EmailService } from "./email.service";
import { ContactApiModel } from "../common/contact.api-model";

@Controller("email")
export class EmailController {
    /**
     * Constructor
     */
    constructor(private readonly emailService: EmailService) {}

    /**
     * Sends an email to our info mail. It also sends a notification
     * to our WP Discord server.
     * @param contact The contact information
     */
    @Post("send")
    async sendEmail(@Body() contact: ContactApiModel): Promise<void> {
        let discordMessage: unknown = {
            color: 3066993,
            title: "Neue Kontaktanfrage!",
            description: "[Take me there!](https://webmail.strato.com/appsuite/signin)",
        };

        // Try to send the contact submission
        try {
            await this.emailService.replyCustomer(contact);
            await this.emailService.forwardContactRequest(contact);
        } catch (err) {
            discordMessage = {
                title: "Fehler bei Verarbeitung einer Kontaktanfrage!",
                color: 16711680,
                fields: [{ name: "Error", value: err.toString() }],
            };
        }

        // Send a matching response
        this.emailService.sendDiscordNotification(discordMessage);
    }
}
