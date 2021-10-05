import { Body, Controller, Post } from "@nestjs/common";
import { EmailService } from "./email.service";

@Controller("email")
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Post("send")
    async sendEmail(@Body("name") name, @Body("email") email, @Body("message") message): Promise<void> {
        await this.emailService.sendToCustomer(name, email);
        await this.emailService.sendContactRequest(name, email, message);
    }
}
