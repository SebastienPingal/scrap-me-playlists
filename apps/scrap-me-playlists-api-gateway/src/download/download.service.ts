import { Inject, Injectable } from '@nestjs/common'
import { CreateDownloadDto } from './dto/create-download.dto'
import { UpdateDownloadDto } from './dto/update-download.dto'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class DownloadService {
  constructor(
    @Inject('DOWNLOAD_SERVICE') private client: ClientProxy,
  ) { }

  create(createDownloadDto: CreateDownloadDto) {
    return this.client.send('download.create', createDownloadDto)
  }

  findAll() {
    return this.client.send('download.findAll', {})
  }

  findOne(id: number) {
    return this.client.send('download.findOne', id)
  }

  update(id: number, updateDownloadDto: UpdateDownloadDto) {
    return this.client.send('download.update', { id, ...updateDownloadDto })
  }

  remove(id: number) {
    return this.client.send('download.remove', id)
  }
}
