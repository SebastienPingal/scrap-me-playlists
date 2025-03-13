import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'

import { DownloadService } from './download.service'
import { DownloadController } from './download.controller'

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
