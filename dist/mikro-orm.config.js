"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const constant_1 = require("./constant");
const path = require("path");
exports.default = {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    allowGlobalContext: true,
    entities: [Post_1.Post],
    dbName: 'lireddit',
    type: 'postgresql',
    debug: !constant_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map