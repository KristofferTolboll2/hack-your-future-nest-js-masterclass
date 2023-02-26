import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Request,
  Response,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './dtos/create-cat.dto';

@Controller('cat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCats() {
    return this.appService.getCats();
  }

  @Post()
  async createCat(
    @Body(new ValidationPipe({ whitelist: true })) cat: CreateCatDto,
  ) {
    console.log(cat);
    return this.appService.createCat(cat);
  }
}
