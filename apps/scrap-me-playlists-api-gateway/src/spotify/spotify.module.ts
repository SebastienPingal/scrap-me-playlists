import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { ConfigService, getServicePort, ServiceName, SharedConfigModule } from '@app/config'

import { SpotifyController } from './spotify.controller'
import { SpotifyService } from './spotify.service'

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'SPOTIFY_CLIENT',
        imports: [SharedConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            port: getServicePort(configService, ServiceName.SPOTIFY),
          },
        }),
      },
    ]),
  ],
  controllers: [SpotifyController],
  providers: [SpotifyService],
  exports: [ClientsModule]
})
export class SpotifyModule { }
