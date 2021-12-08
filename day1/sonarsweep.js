const fs = require('fs')

fs.readFile('./input', 'utf8' , (err, d) => {
  if (err) {
    console.error('error reading file',err);
    return
  }
  let data = d.split(/[\r\n]+/);
  console.log('solution for part 1', part1(data));
  console.log('solution for part 2', part2(data));
  
})
function part2(data) {
  let count = 0;
  let current = Number(data[0]) + Number(data[1]) + Number(data[2]);
  
  for (let index = 3; index < data.length; index++) {
    const next = current - Number(data[index-3]) +  Number(data[index]);
    if(current < next) {
      count++;
    }
    current = next;
  }
  return count;
}
function part1(data) {
  let count = 1;
  
  data.reduce((prev, next)=> {
    if(prev < next) {
      count++
    }
    return next;
  });
  return count;
}
// part 2


