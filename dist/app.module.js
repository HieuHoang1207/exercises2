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
const app_service_1 = require("./app.service");
const mysql = require("mysql2/promise");
require('dotenv').config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            app_service_1.AppService,
            {
                provide: 'DATABASE_POOL',
                useFactory: async () => {
                    const pool = mysql.createPool({
                        host: process.env.DB_HOST,
                        port: parseInt(process.env.DB_PORT, 10),
                        user: process.env.DB_USERNAME,
                        password: process.env.DB_PASSWORD,
                        database: process.env.DB_DATABASE,
                        waitForConnections: true,
                        connectionLimit: 10,
                        queueLimit: 0,
                    });
                    return pool;
                },
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map