import { helper } from '@ember/component/helper';

export function getBookName(params/*, hash*/) {
  let [title] = params;
  return `${title}`;
}

export default helper(getBookName);
