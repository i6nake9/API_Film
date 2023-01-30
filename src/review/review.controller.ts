import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: CreateReviewDto) {}

  @Delete('id')
  async delete(@Param('id') id: string) {}

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {}
}
