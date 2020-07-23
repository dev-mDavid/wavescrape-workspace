import { Test, TestingModule } from '@nestjs/testing';
import { TestScrapeController } from './test-scrape.controller';

describe('TestScrape Controller', () => {
  let controller: TestScrapeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestScrapeController],
    }).compile();

    controller = module.get<TestScrapeController>(TestScrapeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
