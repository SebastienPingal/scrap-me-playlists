import { ConfigService } from '@nestjs/config'
import * as Joi from 'joi'
import { serviceRegistry, ServiceName } from '../service-registry'

const service = serviceRegistry[ServiceName.SPOTIFY]

export const spotifyConfigValidation = {
  [`${service.envPrefix}_PORT`]: Joi.number().default(service.defaultPort),
  SPOTIFY_CLIENT_ID: Joi.string().required(),
  SPOTIFY_CLIENT_SECRET: Joi.string().required(),
}

export interface SpotifyConfig {
  clientId: string
  clientSecret: string
}

export const getSpotifyConfig = (configService: ConfigService): SpotifyConfig => ({
  clientId: configService.get<string>('SPOTIFY_CLIENT_ID'),
  clientSecret: configService.get<string>('SPOTIFY_CLIENT_SECRET'),
})
