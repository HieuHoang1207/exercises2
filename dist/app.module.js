"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exercises2_module_1 = require("./exercises2.module");
const user_entity_1 = require("./entities/user.entity");
const meeting_entity_1 = require("./entities/meeting.entity");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'bqhb6eeylfrj0sodfql0-mysql.services.clever-cloud.com',
                port: 3306,
                username: 'uikodafracmdjk0s',
                password: 'VOclsCP2fPSK0ORi5TTL',
                database: 'bqhb6eeylfrj0sodfql0',
                entities: [user_entity_1.User, meeting_entity_1.Meeting],
                synchronize: true,
                extra: {
                    connectionLimit: 5,
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, meeting_entity_1.Meeting]),
            exercises2_module_1.Exercises2Module,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map