import { Controller, Get } from '@nestjs/common'
import { SpotifyService } from './spotify.service'

@Controller()
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @Get()
  getHello(): string {
    return this.spotifyService.getHello()
  }
}
