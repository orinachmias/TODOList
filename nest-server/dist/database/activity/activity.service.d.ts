import { Model } from 'mongoose';
import { Activity, ActivityDocument } from './activity.model';
export declare class ActivityService {
    private activityModel;
    constructor(activityModel: Model<ActivityDocument>);
    create(activity: Activity): Promise<Activity>;
    findAll(): Promise<Activity[]>;
}
