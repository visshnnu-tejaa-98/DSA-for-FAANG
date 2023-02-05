const divideNumber = (divisor, dividend) => {
  let count = 0;
  let sign = 1;
  if (dividend < 0 && divisor > 0) sign = -1;
  if (dividend > 0 && divisor < 0) sign = -1;
  while (Math.abs(dividend) >= Math.abs(divisor)) {
    if (Math.abs(dividend) >= Math.abs(divisor)) {
      dividend = Math.abs(dividend) - Math.abs(divisor);
      count++;
    }
  }
  if (sign == -1) {
    return 0 - count;
  } else {
    return count;
  }
};

let dividend = 22;
let divisor = 7;
let result = divideNumber(divisor, dividend);
console.log(result);
