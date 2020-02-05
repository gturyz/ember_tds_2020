import { helper } from '@ember/component/helper';

export function formatCurrency(value) {
  let dollars = Math.floor(value);
  let cents = (value + "").split(".");
  let sign = '€';

  // if (cents.toString().length === 1) { cents = '0' + cents; }
  return `${dollars},${cents!=dollars?cents[1]:'00'} ${sign}`;
}

export default helper(formatCurrency);
