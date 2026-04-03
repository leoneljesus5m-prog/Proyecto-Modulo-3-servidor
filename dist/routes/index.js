"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = (0, express_1.Router)();
router.get("/users", auth_1.default, usersController_1.getUsers);
router.post("/users", usersController_1.createUsers);
router.delete("/users", usersController_1.deleteUsers);
exports.default = router;
//# sourceMappingURL=index.js.map