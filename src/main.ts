import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Kích hoạt CORS nếu cần
  await app.listen(3000); // Port sẽ được Vercel tự động định cấu hình
}
bootstrap();
////http://localhost:3000/users?offset=2&limit=5
