import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'

import { SpotifyController } from './spotify.controller'
import { SpotifyService } from './spotify.service'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SPOTIFY_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [SpotifyController],
  providers: [SpotifyService],
  exports: [ClientsModule]
})
export class SpotifyModule { }
