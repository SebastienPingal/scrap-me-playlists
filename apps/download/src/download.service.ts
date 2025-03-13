import { Injectable } from '@nestjs/common'
import { CreateDownloadDto } from './dto/create-download.dto'
import { UpdateDownloadDto } from './dto/update-download.dto'
import { DownloadDto } from './dto/download.dto'
@Injectable()
export class DownloadService {
  private downloads: DownloadDto[] = [
    {
      id: 1,
      name: 'Download 1',
      url: 'https://www.google.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Download 2',
      url: 'https://www.google.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Download 3',
      url: 'https://www.google.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  create(createDownloadDto: CreateDownloadDto) {
    const download = {
      id: this.downloads.length + 1,
      ...createDownloadDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.downloads.push(download)
    return download
  }

  findAll() {
    return this.downloads
  }

  findOne(id: number) {
    return this.downloads.find((download) => download.id === id)
  }

  update(id: number, updateDownloadDto: UpdateDownloadDto) {
    const index = this.downloads.findIndex((download) => download.id === id)
    this.downloads[index] = {
      ...this.downloads[index],
      ...updateDownloadDto,
      updatedAt: new Date(),
    }
    return this.downloads[index]
  }

  remove(id: number) {
    this.downloads = this.downloads.filter((download) => download.id !== id)
    return this.downloads
  }
}
