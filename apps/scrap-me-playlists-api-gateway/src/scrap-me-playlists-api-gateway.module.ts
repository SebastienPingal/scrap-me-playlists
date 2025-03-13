import { Module } from '@nestjs/common'
import { ScrapMePlaylistsApiGatewayController } from './scrap-me-playlists-api-gateway.controller'
import { ScrapMePlaylistsApiGatewayService } from './scrap-me-playlists-api-gateway.service'
import { SpotifyService } from './spotify/spotify.service'
import { SpotifyModule } from './spotify/spotify.module'
import { DownloadModule } from './download/download.module'

@Module({
  imports: [SpotifyModule, DownloadModule],
  controllers: [ScrapMePlaylistsApiGatewayController],
  providers: [ScrapMePlaylistsApiGatewayService, SpotifyService],
})
export class ScrapMePlaylistsApiGatewayModule {}
