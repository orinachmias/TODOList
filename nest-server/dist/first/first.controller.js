"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstController = void 0;
const common_1 = require("@nestjs/common");
const first_service_1 = require("./first.service");
let FirstController = class FirstController {
    constructor(firstService) {
        this.firstService = firstService;
    }
    test(text) {
        return this.firstService.test(text);
    }
};
exports.FirstController = FirstController;
__decorate([
    (0, common_1.Get)('test/:text'),
    __param(0, (0, common_1.Param)('text')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FirstController.prototype, "test", null);
exports.FirstController = FirstController = __decorate([
    (0, common_1.Controller)('first'),
    __metadata("design:paramtypes", [first_service_1.FirstService])
], FirstController);
//# sourceMappingURL=first.controller.js.map