import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  dataService: service('data'),

  actions: {
    deleteBook(idBook) {
      this.get('dataService').deleteBook(idBook);
    }
  }
});
