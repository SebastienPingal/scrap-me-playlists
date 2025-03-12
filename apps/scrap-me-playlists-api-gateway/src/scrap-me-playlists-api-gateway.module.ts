import { Module } from '@nestjs/common'
import { ScrapMePlaylistsApiGatewayController } from './scrap-me-playlists-api-gateway.controller'
import { ScrapMePlaylistsApiGatewayService } from './scrap-me-playlists-api-gateway.service'

@Module({
  imports: [],
  controllers: [ScrapMePlaylistsApiGatewayController],
  providers: [ScrapMePlaylistsApiGatewayService],
})
export class ScrapMePlaylistsApiGatewayModule {}
