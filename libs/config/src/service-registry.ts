export enum ServiceName {
  GATEWAY = 'gateway',
  SPOTIFY = 'spotify',
  DOWNLOAD = 'download',
}

export interface ServiceConfig {
  name: ServiceName
  defaultPort: number,
  envPrefix: string,
}

export const serviceRegistry: Record<ServiceName, ServiceConfig> = {
  [ServiceName.GATEWAY]: {
    name: ServiceName.GATEWAY,
    defaultPort: 3000,
    envPrefix: 'gateway',
  },
  [ServiceName.SPOTIFY]: {
    name: ServiceName.SPOTIFY,
    defaultPort: 3001,
    envPrefix: 'spotify',
  },
  [ServiceName.DOWNLOAD]: {
    name: ServiceName.DOWNLOAD,
    defaultPort: 3002,
    envPrefix: 'download',
  },
}

export const getServicePort = (configService, serviceName: ServiceName) => {
  const service = serviceRegistry[serviceName]
  const portEnvVar = `${service.envPrefix}_PORT`
  return configService.get(portEnvVar) || service.defaultPort
}
