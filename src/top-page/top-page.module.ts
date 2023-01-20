import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TopPageController } from './top-page.controller';

@Module({
  controllers: [TopPageController],
})
export class TopPageModule {
  constructor(private readonly config: ConfigService) {
    this.config.get('Test');
  }
}
