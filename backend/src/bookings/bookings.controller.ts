import { Controller, Get, Param } from '@nestjs/common';
// import {  } from './bookings.interfaces';

@Controller('bookings')
export class BookingsController {
  @Get()
  findBookings(@Param() params): any[] {
    return [];
  }
}
