import { Module } from '@nestjs/common';
import { firstModule } from './first/first.module';
import { UserModule } from './database/users/users.module';
import {DatabaseModule }from './database/database.module'
import { ActivityModule } from './database/activity/activity.module';
@Module({
  imports: [firstModule , UserModule , DatabaseModule , ActivityModule],
})
export class AppModule {}
