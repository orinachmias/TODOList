import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {run} from './database/database.connection'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  run();
  await app.listen(3030);
}
bootstrap();
