import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { SentMessageInfo } from "nodemailer";
import { ContactApiModel } from "../common/contact.api-model";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class EmailService {
    /**
     * Constructor
     */
    constructor(private readonly mailerService: MailerService, private httpService: HttpService) {}

    /**
     * Send Auto-Reply email to the customer
     * @param contact The contact information
     */
    public async replyCustomer(contact: ContactApiModel): Promise<SentMessageInfo> {
        return this.mailerService.sendMail({
            to: contact.email,
            subject: contact.lang === "de" ? "Ihre Kontaktanfrage" : "Your Contact Submission",
            template: contact.lang === "de" ? "./contactAnswerDE" : "./contactAnswerEN",
            context: {
                name: contact.name,
            },
            attachments: [
                { filename: "logo.png", path: `${__dirname}/assets/img/logo.png`, cid: "logo1" },
                { filename: "line.png", path: `${__dirname}/assets/img/line.png`, cid: "line" },
            ],
        });
    }

    /**
     * Sends a contact request via email
     * @param contact The contact information
     */
    public async forwardContactRequest(contact: ContactApiModel): Promise<SentMessageInfo> {
        return this.mailerService.sendMail({
            to: process.env.CONTACT_ADDRESS || "social@weichwarenprojekt.de",
            subject: `Neue Kontaktanfrage - ${contact.name}`,
            template: "./contactRequest",
            context: {
                ...contact,
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
    public sendDiscordNotification(data: unknown): void {
        this.httpService
            .post(process.env.DISCORD_URL, {
                username: "Weichwaren Bot",
                embeds: [data],
            })
            .subscribe()
            .unsubscribe();
    }
}
