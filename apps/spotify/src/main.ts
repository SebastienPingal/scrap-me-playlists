import { NestFactory } from '@nestjs/core'
import { SpotifyModule } from './spotify.module'
import { MicroserviceOptions } from '@nestjs/microservices'
import { ConfigService } from '@nestjs/config'
import { getServicePort, ServiceName } from '@app/config'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(SpotifyModule)
  const configService = app.get(ConfigService)

  const port = getServicePort(configService, ServiceName.SPOTIFY)
  console.log(`🔈 Spotify service is running on port ${port}`)

  await app.listen()
}
bootstrap()
