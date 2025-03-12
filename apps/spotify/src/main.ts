import { NestFactory } from '@nestjs/core'
import { SpotifyModule } from './spotify.module'
import { Transport } from '@nestjs/microservices'
import { MicroserviceOptions } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SpotifyModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    },
  )
  await app.listen()
}
bootstrap()
