import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {}

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

    public async sendContactRequest(name: string, address: string, message: string, phone: string) {
        await this.mailerService.sendMail({
            to: process.env.CONTACT_ADRESS || "social@weichwarenprojekt.de",
            subject: `Neue Kontaktanfrage - ${name}`,
            template: "./contactRequest",
            context: {
                name,
                email: address,
                message,
                phone,
            },
            attachments: [
                { filename: "logo.png", path: `${__dirname}/assets/img/logo.png`, cid: "logo1" },
                { filename: "line.png", path: `${__dirname}/assets/img/line.png`, cid: "line" },
            ],
        });
    }
}
