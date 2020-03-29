import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('td4', function() {
    this.route('developers');
    this.route('projects');
  });
  this.route('td5');
});

export default Router;
