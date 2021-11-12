import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // enable CORS
    app.enableCors({
        origin: "*",
        methods: ["POST", "OPTIONS"],
    });

    await app.listen(process.env.PORT || 3000);
}

bootstrap();
