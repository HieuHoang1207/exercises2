import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors(); // Bật CORS nếu cần
  await app.init(); // Khởi tạo app
}
bootstrap();

export default server; // Export server để Vercel sử dụng

////http://localhost:3000/users?offset=2&limit=5
