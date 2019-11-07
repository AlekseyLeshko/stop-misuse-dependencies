const pneumaticPipelines = require('pneumatic-pipelines')
const p = pneumaticPipelines.addParallel([1, 2, 3])
console.log('its a package B: with pneumatic-pipelines')
console.log('create parallel step: ', p)
console.log('------');
console.log();
