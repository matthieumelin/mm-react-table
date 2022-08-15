"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camalize = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

const camalize = str => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

exports.camalize = camalize;