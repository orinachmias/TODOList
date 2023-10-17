import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ActivityDocument = Activity & Document;

@Schema()
export class Activity {
    
  @Prop()
  name: string;

  @Prop()
  difficulty:Number
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
