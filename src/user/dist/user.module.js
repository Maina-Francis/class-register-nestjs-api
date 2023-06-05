"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var admin_controller_1 = require("./admin/admin.controller");
var teacher_controller_1 = require("./teacher/teacher.controller");
var teacher_service_1 = require("./teacher/teacher.service");
var admin_service_1 = require("./admin/admin.service");
var student_schema_1 = require("src/student/schemas/student.schema");
var mongoose_1 = require("@nestjs/mongoose");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    {
                        name: 'Student',
                        schema: student_schema_1.StudentSchema
                    },
                ]),
            ],
            controllers: [admin_controller_1.AdminController, teacher_controller_1.TeacherController],
            providers: [teacher_service_1.TeacherService, admin_service_1.AdminService]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
