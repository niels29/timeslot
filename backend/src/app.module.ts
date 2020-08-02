import { Module } from '@nestjs/common';
import { SearchController } from './search/search.controller';
import { SearchService } from './search/search.service';
import { BusinessController } from './business/business.controller';
import { BusinessService } from './business/business.service';
import { BookingsController } from './bookings/bookings.controller';
import { BookingsService } from './bookings/bookings.service';

@Module({
  imports: [],
  controllers: [SearchController, BusinessController, BookingsController],
  providers: [SearchService, BusinessService, BookingsService],
})
export class AppModule {}
