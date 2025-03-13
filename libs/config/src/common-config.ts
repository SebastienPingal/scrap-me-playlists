import { ConfigService } from '@nestjs/config'
import * as Joi from 'joi'

export const commonConfigValidation = {
  PORT: Joi.number().default(3000),
}

export const getServicePort = (configService: ConfigService, serviceOffset = 0) => {
  const basePort = configService.get<number>('PORT') || 3000
  return basePort + serviceOffset
}