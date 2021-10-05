import { Body, Controller, Post } from "@nestjs/common";
import { EmailService } from "./email.service";

type DiscordMessage = {
    title?: string;
    color: number;
    description?: string;
    fields?: { name: string; value: string }[];
};

@Controller("email")
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Post("send")
    async sendEmail(
        @Body("name") name,
        @Body("email") email,
        @Body("message") message,
        @Body("company") company,
    ): Promise<void> {
        let discordMessage = {
            color: 3066993,
            title: "Neue Kontaktanfrage!",
            description: "[Take me there!](https://webmail.strato.com/appsuite/signin)",
        } as DiscordMessage;

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
