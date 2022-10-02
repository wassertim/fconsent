// preset.js
const ts_preset = require('ts-jest/presets/js-with-babel/jest-preset');
const puppeteer_preset = require('jest-puppeteer/jest-preset');

module.exports = Object.assign(
    puppeteer_preset,
    ts_preset,
);