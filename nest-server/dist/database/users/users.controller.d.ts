import { UserService } from './users.service';
import { User } from './users.model';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(userData: User): Promise<User>;
    findAll(): Promise<User[]>;
}
