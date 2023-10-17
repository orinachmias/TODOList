import { Controller , Get, Post , Param } from "@nestjs/common";
import { FirstService } from "./first.service";
import { text } from "node:stream/consumers";

@Controller('first')
 export class FirstController {
    constructor(private firstService: FirstService) {}

    @Get('test/:text')
    test(@Param('text') text: string) {
        return this.firstService.test(text);
    }
}