import {Controller, Get, HttpCode, HttpStatus} from '@nestjs/common';
import { MainService } from './main.service';

@Controller('main')
export class MainController {

    constructor(private mainService: MainService) {}
    @Get('Assets')
    @HttpCode(HttpStatus.ACCEPTED)
    getAssets() {
        return this.mainService.findAll();
    }

}
