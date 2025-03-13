import { Inject, Injectable } from '@nestjs/common'
import { CreateDownloadDto, UpdateDownloadDto } from '@app/contracts'
import { ClientProxy } from '@nestjs/microservices'
import { DOWNLOAD_PATTERNS } from '@app/contracts'
import { map } from 'rxjs'

@Injectable()
export class DownloadService {
  constructor(
    @Inject('DOWNLOAD_SERVICE') private client: ClientProxy,
  ) { }

  private mapDownloadDto(downloadDto: CreateDownloadDto) {
    return {
      ...downloadDto,
    }
  }

  create(createDownloadDto: CreateDownloadDto) {
    return this.client.send(DOWNLOAD_PATTERNS.CREATE, createDownloadDto).pipe(
      map(this.mapDownloadDto)
    )
  }

  findAll() {
    return this.client.send(DOWNLOAD_PATTERNS.FIND_ALL, {}).pipe(
      map(this.mapDownloadDto)
    )
  }

  findOne(id: number) {
    return this.client.send(DOWNLOAD_PATTERNS.FIND_ONE, id).pipe(
      map(this.mapDownloadDto)
    )
  }

  update(id: number, updateDownloadDto: UpdateDownloadDto) {
    return this.client.send(DOWNLOAD_PATTERNS.UPDATE, { id, ...updateDownloadDto }).pipe(
      map(this.mapDownloadDto)
    )
  }

  remove(id: number) {
    return this.client.send(DOWNLOAD_PATTERNS.REMOVE, id).pipe(
      map(this.mapDownloadDto)
    )
  }
}
