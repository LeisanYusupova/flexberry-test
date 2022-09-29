import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('author');
  this.route('books');
  this.route('speakers');
  this.route('edit-book');
  this.route('edit-speaker');
  this.route('404', {path: '*path'});
});

export default Router;
