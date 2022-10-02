//jest.config.js with ts-jest and jest-puppeteer
// const { defaults: tsjPreset } = require('ts-jest/presets');

// module.exports = {
//   preset: 'jest-puppeteer',
//   setupFilesAfterEnv: ['expect-puppeteer'],
//   testTimeout: 100000,
//   transform: {
//     ...tsjPreset.transform,    
//   }
// }
module.exports = {
  preset: './preset',
  testTimeout: 10000,
  setupFilesAfterEnv: ['expect-puppeteer'],
  testEnvironment: 'node'
}
