import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


//decorator @Controller
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  //decorator @Get
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
