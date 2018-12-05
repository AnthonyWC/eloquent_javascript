'use strict';

const ReverseArr = (a = [1,2,3,4,5]) => {
  // entries() method returns a new Array Iterator object with KV pairs for each array index
  for (const [i, v] of a.entries()) { // eslint-disable-line
    // use splice to move last element to i position
    // 5 -> 0
    // 4 -> 1
    // ..
    a.splice(i, 0, a.pop());
  }
  return a;
};


module.exports = {
  ReverseArr,
};

if (require.main === module) {
  console.log(ReverseArr());
}
