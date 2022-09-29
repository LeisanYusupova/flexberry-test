import { helper } from '@ember/component/helper';
import ENV from './config/environment';
import {get} from '@ember/object';

export function env({propertyname}/*, hash*/) {
  return get(ENV, propertyname);
}

export default helper(env);
