const fs = require('fs');
let horzPos = 0;
let vertPos = 0;
let aim = 0;

// down X increases your aim by X units.
// up X decreases your aim by X units.
// forward X does two things:
//     It increases your horizontal position by X units.
//     It increases your depth by your aim multiplied by X.


fs.readFile('./input', 'utf8' , (err, data) => {
    if (err) {
        console.error('error', err)
        return
      }
      data = data.split(/[\r\n]+/);
      data.map((position)=> {
          const directionAndValue = position.split(' ');
          const direction = directionAndValue[0];
          const value = Number(directionAndValue[1]);
          if(direction === 'forward') {
              horzPos += value;
              vertPos += (aim * value);
            }
            if(direction === "down") {
              aim += value;
            }
            if(direction === "up") {
                aim -= value;
            }
        }
      )
      console.log('answer', horzPos * vertPos)
      return horzPos * vertPos;
})