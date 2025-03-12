import { NestFactory } from '@nestjs/core';
import { DownloadModule } from './download.module';

async function bootstrap() {
  const app = await NestFactory.create(DownloadModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
