import { Controller, Get } from '@nestjs/common';
import { ScrapMePlaylistsApiGatewayService } from './scrap-me-playlists-api-gateway.service';

@Controller()
export class ScrapMePlaylistsApiGatewayController {
  constructor(private readonly scrapMePlaylistsApiGatewayService: ScrapMePlaylistsApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.scrapMePlaylistsApiGatewayService.getHello();
  }
}
