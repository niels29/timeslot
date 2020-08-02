import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { IBusinessDetail } from './buisness.interfaces';

@Controller('business')
export class BusinessController {
  @Get('detail/:id')
  findBusinessDetail(@Param() params): IBusinessDetail[] {
    return [
      {
        id: 'abc123',
        name: 'LONG BEACH',
        mainBtnLink: '/booking/Long Beach',
        mainBtnText: 'Book slot',
        headline: 'Long Beach',
        subheadline: 'Beach clothing store',
        label: 'STORE',
        imgUrl: '',
        textHeadline: 'Detail information about the shop ',
        openingHours: 'Mo-Sa: 8 am - 8 pm',
        text:
          'Explore Luxury & High Fashion At Luisaviaroma. Shop For Him, Her, Children And The Home. Worlwide Shipping & All Orders Prepared With Maxiumum Care Using The Finest Materials.',
      },
    ];
  }
  @Get('booking/:id')
  findBusinessBooking(@Param() params): any[] {
    return [];
  }
  @Post()
  saveBooking(@Body() value: object): any[] {
    return [];
  }
}
