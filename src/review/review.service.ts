import { Inject, Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ReviewModule } from './review.module';

@Injectable()
export class ReviewService {
  constructor(
    @Inject(ReviewModule) private readonly reviewModel: ModelType<ReviewModule>,
  ) {}
}
