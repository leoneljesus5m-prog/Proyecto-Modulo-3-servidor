"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.getUsers = exports.createUsers = void 0;
const userService_1 = require("../services/userService");
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, active } = req.body;
    const newUser = yield (0, userService_1.createUserService)({ name, email, active });
    res.status(201).json(newUser);
});
exports.createUsers = createUsers;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userService_1.getUserService)();
    res.status(200).json(users);
});
exports.getUsers = getUsers;
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    yield (0, userService_1.deleteUserService)(id);
    res.status(200).json({ message: "Usuario eliminado correctamente" });
});
exports.deleteUsers = deleteUsers;
//# sourceMappingURL=usersController.js.map