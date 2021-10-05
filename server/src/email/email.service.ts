import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService, private httpService: HttpService) {}

    public async sendToCustomer(name: string, address: string) {
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
     * @param name
     * @param address
     * @param message
     * @param company
     */
    public async sendContactRequest(name: string, address: string, message: string, company = null as null | string) {
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

    public sendDiscordNotification(data = {}) {
        return this.httpService.post(process.env.DISCORD_URL, {
            username: "Weichwaren Bot",
            embeds: [data],
        });
    }
}
