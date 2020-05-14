module.exports = {
  name: 'wavescrape',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/wavescrape',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
