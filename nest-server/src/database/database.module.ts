// database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://riko10055:thki1218@cluster0.fpigoec.mongodb.net/nestApplication', {
    })
  ],
})
export class DatabaseModule {}
