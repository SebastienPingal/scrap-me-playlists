import { NestFactory } from '@nestjs/core';
import { SpotifyModule } from './spotify.module';

async function bootstrap() {
  const app = await NestFactory.create(SpotifyModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
