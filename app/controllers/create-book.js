import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    saveBook(e) {
      e.preventDefault();
      this.get("dataService").createBook({
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        title: this.get('title'),
        description: this.get('description')
      })
    },
  }
});
