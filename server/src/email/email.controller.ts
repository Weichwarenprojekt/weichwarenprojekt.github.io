import { Body, Controller, Post } from "@nestjs/common";
import { EmailService } from "./email.service";

@Controller("email")
export class EmailController {
    /**
     * Constructor
     */
    constructor(private readonly emailService: EmailService) {}

    /**
     * Sends an email to our info mail. It also sends a notification
     * to our WP Discord server.
     * @param name Name of the customer
     * @param email Email address of the customer
     * @param message The message content
     * @param company Company the customer is working for (optional)
     */
    @Post("send")
    async sendEmail(
        @Body("name") name: string,
        @Body("email") email: string,
        @Body("message") message: string,
        @Body("company") company?: string,
    ): Promise<void> {
        let discordMessage: unknown = {
            color: 3066993,
            title: "Neue Kontaktanfrage!",
            description: "[Take me there!](https://webmail.strato.com/appsuite/signin)",
        };

        try {
            await this.emailService.sendToCustomer(name, email);
            await this.emailService.sendContactRequest(name, email, message, company);
        } catch (err) {
            discordMessage = {
                title: "Fehler bei Verarbeitung einer Kontaktanfrage!",
                color: 16711680,
                fields: [{ name: "Error", value: err.toString() }],
            };
        }

        return this.emailService.sendDiscordNotification(discordMessage).subscribe().unsubscribe();
    }
}
