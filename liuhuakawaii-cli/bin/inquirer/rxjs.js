const { range } = require('rxjs');
const { filter, map } = require('rxjs/operators');

const pipe = range(1, 100).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
)

pipe.subscribe(x => console.log(x));