import Service from '@ember/service';
import ENV from 'books-demo/config/environment';

export default Service.extend({
  getBooks() {
    return fetch(`${ENV.backendURL}/books`).then((response) => response.json());
  },

  getBook(id) {
    return fetch(`${ENV.backendURL}/books/${id}`).then((response) => response.json());
  },

  deleteBook(id) {
    return fetch(`${ENV.backendURL}/books/${id}`, { method: 'DELETE'});
  },

  createBook(book) {
    return fetch(`${ENV.backendURL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  }
});
