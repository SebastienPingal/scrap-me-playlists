import { NestFactory } from '@nestjs/core'
import { DownloadModule } from './download.module'
import { Transport } from '@nestjs/microservices'
import { MicroserviceOptions } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    DownloadModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3002,
      },
    },
  )
  await app.listen()
}
bootstrap()
