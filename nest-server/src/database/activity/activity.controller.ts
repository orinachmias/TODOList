
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './activity.model';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Post('add')
  async create(@Body() activity: Activity): Promise<Activity> {
    console.log(activity)
    return this.activityService.create(activity);
  }

  @Get('all')
  async findAll(): Promise<Activity[]> {
    return this.activityService.findAll();
  }
}
