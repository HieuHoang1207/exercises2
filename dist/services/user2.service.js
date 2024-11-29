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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const meeting_entity_1 = require("../entities/meeting.entity");
let UserService = class UserService {
    constructor(userRepository, meetingRepository) {
        this.userRepository = userRepository;
        this.meetingRepository = meetingRepository;
    }
    async getUsers(offset = 0, limit = 10) {
        const users = await this.userRepository.find({
            take: limit,
            skip: offset,
            relations: ['meetings'],
        });
        return await Promise.all(users.map((user) => this.mapUserToDto(user)));
    }
    async mapUserToDto(user) {
        const meetingDays = await this.getMeetingDays(user.id);
        const daysWithoutMeetings = user.days - meetingDays.length;
        return {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            gender: user.gender,
            days: user.days,
            meeting_days: meetingDays,
            days_without_meetings: daysWithoutMeetings,
        };
    }
    async getMeetingDays(userId) {
        const userMeetings = await this.meetingRepository.find({
            where: { user: { id: userId } },
        });
        const meetingDays = [];
        userMeetings.forEach((meeting) => {
            meetingDays.push(`${meeting.start_day}->${meeting.end_day}`);
        });
        return meetingDays;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(meeting_entity_1.Meeting)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user2.service.js.map