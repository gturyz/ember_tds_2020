import { helper } from '@ember/component/helper';

export default helper(function formatDate(params/*, hash*/) {
  let date = new Date(params);
  let day = date.getDate();
  day = day.toString().length==1?`0${day}`:isNaN(day)?"00":day;
  let month = date.getMonth()+1;
  month = month.toString().length==1?`0${month}`:isNaN(month)?"00":month;
  let year = date.getFullYear();
  return `${day}-${month}-${isNaN(year)?"0000":year}`;
});
