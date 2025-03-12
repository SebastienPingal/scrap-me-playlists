import { NestFactory } from '@nestjs/core';
import { ScrapMePlaylistsApiGatewayModule } from './scrap-me-playlists-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ScrapMePlaylistsApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
