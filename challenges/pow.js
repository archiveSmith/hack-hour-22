/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let pwr = power;
  if (pwr === 0) return 1;
  while (pwr > 1) {
    pwr -= 1;
    return (base *= pow(base, pwr));
  }
  return base;
}

module.exports = pow;
