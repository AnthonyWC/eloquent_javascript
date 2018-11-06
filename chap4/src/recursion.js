'use strict';

const ReverseArr = (a = [1,2,3,4,5]) => {
  for (const [i, v] of a.entries()) { // eslint-disable-line
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
