"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var PORT = 33333;
var ROOT = __dirname;
var config = {
  root: ROOT,
  // 项目根目录
  port: PORT,
  // server 端口号
  routes: 'routes' // 服务端路由目录

};
var _default = config;
exports["default"] = _default;