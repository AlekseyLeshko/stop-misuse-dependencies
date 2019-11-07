require('package-a')
require('package-b')
const ramda = require('ramda')

console.log('main package')
console.log('ramda.filter(n => n % 2 === 0, [1, 2, 3, 4]) = ', ramda.filter(n => n % 2 === 0, [1, 2, 3, 4]));
