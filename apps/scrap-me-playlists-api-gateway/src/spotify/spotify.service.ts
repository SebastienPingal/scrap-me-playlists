import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class SpotifyService {
  constructor(@Inject('SPOTIFY_CLIENT') private spotifyClient: ClientProxy) { }

  getPlaylists() {
    console.log('🚪 getPlaylists service gateway')
    return this.spotifyClient.send('spotify.getPlaylists', {})
  }
}
