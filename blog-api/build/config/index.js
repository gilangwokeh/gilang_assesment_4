"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const Config = {
    DB_mongodb: process.env.APP_DB,
    SECRET: process.env.APP_SECRET,
    PORT: process.env.APP_PORT
};
exports.default = Config;
