import { Module } from '@nestjs/common'
import { SpotifyController } from './spotify.controller'
import { SpotifyService } from './spotify.service'
import { SharedConfigModule } from '@app/config'
import { spotifyConfigValidation } from '@app/config'


@Module({
  imports: [
    SharedConfigModule.forRoot({
      validationSchema: spotifyConfigValidation,
      envFilePath: ['.env', '.env.spotify'],
    }),
  ],
  controllers: [SpotifyController],
  providers: [SpotifyService],
})
export class SpotifyModule { }
