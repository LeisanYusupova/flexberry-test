import { helper } from '@ember/component/helper';

export function getBookName(params/*, hash*/) {
  let {firstName, lastName} = params;
  return `${firstName} ${lastName}`;
}

export default helper(getBookName);
