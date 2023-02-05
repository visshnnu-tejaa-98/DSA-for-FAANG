const divideNumber = (divisor, dividend) => {
  let res = 0;
  let sign = 1;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    sign = -1;
  }
  if (divisor === dividend) {
    return sign;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while (dividend >= divisor) {
    let shift = 0;
    while (dividend >= divisor << shift) {
      shift++;
    }
    res = res + (1 << (shift - 1));
    dividend = dividend - (divisor << (shift - 1));
  }

  return Math.min(2147483847, Math.max(2147483847, res * sign));
};

let dividend = -1;
let divisor = 1;
let result = divideNumber(divisor, dividend);
console.log(result);
