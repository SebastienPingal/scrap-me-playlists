import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { DownloadService } from './download.service'
import { CreateDownloadDto } from './dto/create-download.dto'
import { UpdateDownloadDto } from './dto/update-download.dto'

@Controller()
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) { }

  @MessagePattern('download.create')
  create(@Payload() createDownloadDto: CreateDownloadDto) {
    return this.downloadService.create(createDownloadDto)
  }

  @MessagePattern('download.findAll')
  findAll() {
    return this.downloadService.findAll()
  }

  @MessagePattern('download.findOne')
  findOne(@Payload() id: number) {
    return this.downloadService.findOne(id)
  }

  @MessagePattern('download.update')
  update(@Payload() updateDownloadDto: UpdateDownloadDto) {
    return this.downloadService.update(updateDownloadDto.id, updateDownloadDto)
  }

  @MessagePattern('download.remove')
  remove(@Payload() id: number) {
    return this.downloadService.remove(id)
  }
}
