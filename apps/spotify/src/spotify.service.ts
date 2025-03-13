import { Injectable } from '@nestjs/common'

@Injectable()
export class SpotifyService {
  getPlaylists() {
    console.log('🔈 getPlaylists service microservice')
    return 'You are on the right spotify microservice'
    //   const clientId = process.env.SPOTIFY_CLIENT_ID
    //   const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

    //   try {
    //     //get the token
    //     const tokenResponse = await fetch(
    //       'https://accounts.spotify.com/api/token',
    //       {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    //       },
    //     )

    //     if (!tokenResponse.ok) {
    //       throw new Error('Failed to get token')
    //     }

    //     const tokenData = await tokenResponse.json()
    //     const token = tokenData.access_token

    //     const playlistsResponse = await fetch(
    //       'https://api.spotify.com/v1/me/playlists',
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       },
    //     )

    //     if (!playlistsResponse.ok) {
    //       throw new Error('Failed to get playlists')
    //     }

    //     const playlistsData = await playlistsResponse.json()

    //     return playlistsData
    //   } catch (error) {
    //     console.error(error)
    //     throw new Error('Failed to get playlists')
    //   }
  }
}
