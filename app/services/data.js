import Service from '@ember/service';
import ENV from 'books-demo/config/environment';

export default Service.extend({
  getBooks() {
    return fetch(`${ENV.backendURL}/books`).then((response) => response.json());
  }

});
