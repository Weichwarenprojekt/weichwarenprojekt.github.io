import { Module } from "@nestjs/common";
import { EmailController } from "./email.controller";
import { EmailService } from "./email.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { PugAdapter } from "@nestjs-modules/mailer/dist/adapters/pug.adapter";
import { ConfigModule } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [
        HttpModule,
        ConfigModule.forRoot(),
        MailerModule.forRoot({
            transport: process.env.SMTP_STRING,
            defaults: {
                from: `'Weichwarenprojekt' <${process.env.SENDER_ADRESS}>`,
            },
            template: {
                dir: __dirname + "/assets/templates",
                adapter: new PugAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
    ],
    controllers: [EmailController],
    providers: [EmailService],
})
export class EmailModule {}
