import { Model } from 'mongoose';
import { User, UserDocument } from './users.model';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(userData: User): Promise<User>;
    findAll(): Promise<User[]>;
}
