import { Test, TestingModule } from '@nestjs/testing';
import { ScrapMePlaylistsApiGatewayController } from './scrap-me-playlists-api-gateway.controller';
import { ScrapMePlaylistsApiGatewayService } from './scrap-me-playlists-api-gateway.service';

describe('ScrapMePlaylistsApiGatewayController', () => {
  let scrapMePlaylistsApiGatewayController: ScrapMePlaylistsApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ScrapMePlaylistsApiGatewayController],
      providers: [ScrapMePlaylistsApiGatewayService],
    }).compile();

    scrapMePlaylistsApiGatewayController = app.get<ScrapMePlaylistsApiGatewayController>(ScrapMePlaylistsApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(scrapMePlaylistsApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
