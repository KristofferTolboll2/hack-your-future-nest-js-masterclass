import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';

@Injectable()
export class AppService {
  cats: CreateCatDto[];

  constructor() {
    this.cats = [];
  }

  getCats() {
    return this.cats;
  }

  createCat(cat: CreateCatDto) {
    this.cats.push(cat);
  }
}
