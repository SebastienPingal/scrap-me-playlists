import { DynamicModule, Module } from '@nestjs/common'
import { ConfigService } from './config.service'
import { ConfigModuleOptions, ConfigModule as NestConfigModule } from '@nestjs/config'
import * as Joi from 'joi'
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class SharedConfigModule {
  static forRoot(options: ConfigModuleOptions): DynamicModule {
    const defaultSchema = Joi.object({
      NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
      PORT: Joi.number().default(3000),
    })

    const mergedSchema = options?.validationSchema
      ? defaultSchema.concat(Joi.object(options.validationSchema))
      : defaultSchema

    return {
      module: SharedConfigModule,
      imports: [
        NestConfigModule.forRoot({
          isGlobal: true,
          envFilePath: options?.envFilePath ?? ['.env', `.env.${process.env.NODE_ENV || 'development'}`],
          validationSchema: mergedSchema,
          cache: true,
        }),
      ],
      providers: [ConfigService],
      exports: [ConfigService],
    }
  }

  static forFeature(serviceSpecificConfig: Record<string, any>): DynamicModule {
    return {
      module: SharedConfigModule,
      providers: [
        {
          provide: 'SERVICE_CONFIG',
          useValue: serviceSpecificConfig,
        },
      ],
      exports: ['SERVICE_CONFIG'],
    }
  }
}
