import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class SpotifyService {
  constructor(@Inject('SPOTIFY_CLIENT') private spotifyClient: ClientProxy) { }

  getPlaylists() {
    console.log('🚪 getPlaylists service gateway')
    const playlists = this.spotifyClient.send('spotify.getPlaylists', {})
    console.log('playlists', playlists)
    return playlists
  }
}
