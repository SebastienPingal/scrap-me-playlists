import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { getSpotifyConfig } from '@app/config'

@Injectable()
export class SpotifyService {
  private spotifyConfig

  constructor(private configService: ConfigService) {
    this.spotifyConfig = getSpotifyConfig(configService)
  }

  async getPlaylists() {
    console.log('🔈 getPlaylists service microservice')
    const { clientId, clientSecret } = this.spotifyConfig
    console.log('🔑 clientId', clientId)
    console.log('🔐 clientSecret', clientSecret)

    try {
      //get the token
      const tokenResponse = await fetch(
        'https://accounts.spotify.com/api/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        },
      )

      if (!tokenResponse.ok) {
        throw new Error(`status: ${tokenResponse.status}❗ Failed to get token ${tokenResponse.statusText}`)
      }

      const tokenData = await tokenResponse.json()
      const token = tokenData.access_token

      const playlistsResponse = await fetch(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (!playlistsResponse.ok) {
        throw new Error('Failed to get playlists')
      }

      const playlistsData = await playlistsResponse.json()

      return playlistsData
    } catch (error) {
      console.error(error)
      throw new Error('Failed to get playlists')
    }
  }
}
