import { helper } from '@ember/component/helper';

export function getBookPage(params/*, hash*/) {
  let [pageNumber] = params;

  return pageNumber;
}

export default helper(getBookPage);
