import { helper } from '@ember/component/helper';

export default helper(function badge(params/*, hash*/) {
  if (params==="red") return "badge-danger";
  else if (params==="blue") return "badge-primary";
  else if (params==="gray") return "badge-secondary";
  else if (params==="green") return "badge-success";
  else if (params==="yellow") return "badge-warning";
  else if (params==="white") return "badge-lght";
  else return "badge-dark";
});
