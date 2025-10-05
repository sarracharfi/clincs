import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Autoriser CORS depuis le frontend
  app.enableCors({
    origin: 'http://localhost:5173', // ton frontend Vite
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // si tu utilises cookies ou token
  });

  await app.listen(3000);
}
bootstrap();
