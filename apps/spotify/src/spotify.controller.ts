import { Controller } from '@nestjs/common'
import { SpotifyService } from './spotify.service'
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) { }

  @MessagePattern('spotify.getPlaylists')
  getPlaylists() {
    console.log('🔈 getPlaylists controller microservice')
    const playlists = this.spotifyService.getPlaylists()
    console.log('playlists', playlists)
    return playlists
  }
}
