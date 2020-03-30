import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:id' });
  });
  this.route('projects', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:id' });
  });
  this.route('project', { path: '/project/:id' });

  this.route('story', function() {
    this.route('new', { path: '/new/:id' });
  });
});

export default Router;
