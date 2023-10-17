import { ActivityService } from './activity.service';
import { Activity } from './activity.model';
export declare class ActivityController {
    private activityService;
    constructor(activityService: ActivityService);
    create(activity: Activity): Promise<Activity>;
    findAll(): Promise<Activity[]>;
}
