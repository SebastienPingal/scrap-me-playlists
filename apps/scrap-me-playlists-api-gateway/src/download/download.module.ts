import { Module } from '@nestjs/common'
import { DownloadService } from './download.service'
import { DownloadController } from './download.controller'
import { ClientsModule } from '@nestjs/microservices'
import { Transport } from '@nestjs/microservices'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DOWNLOAD_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [DownloadController],
  providers: [DownloadService],
})
export class DownloadModule { }
