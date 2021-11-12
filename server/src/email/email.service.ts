import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { HttpService } from "@nestjs/axios";
import { SentMessageInfo } from "nodemailer";

@Injectable()
export class EmailService {
    /**
     * Constructor
     */
    constructor(private readonly mailerService: MailerService, private httpService: HttpService) {}

    /**
     * Send Auto-Reply email to the customer
     * @param name Name of the customer
     * @param address The destination email address
     */
    public async sendToCustomer(name: string, address: string): Promise<SentMessageInfo> {
        await this.mailerService.sendMail({
            to: address,
            subject: "Ihre Kontaktanfrage",
            template: "./contactAnswer",
            context: {
                name,
            },
            attachments: [
                { filename: "logo.png", path: `${__dirname}/assets/img/logo.png`, cid: "logo1" },
                { filename: "line.png", path: `${__dirname}/assets/img/line.png`, cid: "line" },
            ],
        });
    }

    /**
     * Sends a contact request via email
     * @param name Name of the customer
     * @param address Email address of the customer
     * @param message The message content
     * @param company Company the customer is working for (optional)
     */
    public async sendContactRequest(name: string, address: string, message: string, company?: string) {
        await this.mailerService.sendMail({
            to: process.env.CONTACT_ADRESS || "social@weichwarenprojekt.de",
            subject: `Neue Kontaktanfrage - ${name}`,
            template: "./contactRequest",
            context: {
                name,
                email: address,
                message,
                company,
            },
            attachments: [
                { filename: "logo.png", path: `${__dirname}/assets/img/logo.png`, cid: "logo1" },
                { filename: "line.png", path: `${__dirname}/assets/img/line.png`, cid: "line" },
            ],
        });
    }

    /**
     * Sends a notification to the WP Discord server
     * @param data The discord data
     */
    public sendDiscordNotification(data: unknown) {
        return this.httpService.post(process.env.DISCORD_URL, {
            username: "Weichwaren Bot",
            embeds: [data],
        });
    }
}
