import { FirstService } from "./first.service";
export declare class FirstController {
    private firstService;
    constructor(firstService: FirstService);
    test(text: string): string;
}
