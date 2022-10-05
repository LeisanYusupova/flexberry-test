import { helper } from '@ember/component/helper';

export function getBookAuthor(params/*, hash*/) {
  let [lastName, firstName] = params;
  return `${lastName} ${firstName}`;
}

export default helper(getBookAuthor);
