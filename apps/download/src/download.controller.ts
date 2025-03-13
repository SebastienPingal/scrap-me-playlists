import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { DownloadService } from './download.service'
import { CreateDownloadDto, UpdateDownloadDto, DOWNLOAD_PATTERNS } from '@app/contracts'

@Controller()
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) { }

  @MessagePattern(DOWNLOAD_PATTERNS.CREATE)
  create(@Payload() createDownloadDto: CreateDownloadDto) {
    return this.downloadService.create(createDownloadDto)
  }

  @MessagePattern(DOWNLOAD_PATTERNS.FIND_ALL)
  findAll() {
    return this.downloadService.findAll()
  }

  @MessagePattern(DOWNLOAD_PATTERNS.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.downloadService.findOne(id)
  }

  @MessagePattern(DOWNLOAD_PATTERNS.UPDATE)
  update(@Payload() updateDownloadDto: UpdateDownloadDto) {
    return this.downloadService.update(updateDownloadDto.id, updateDownloadDto)
  }

  @MessagePattern(DOWNLOAD_PATTERNS.REMOVE)
  remove(@Payload() id: number) {
    return this.downloadService.remove(id)
  }
}
