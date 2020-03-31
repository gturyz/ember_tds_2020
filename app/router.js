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
  this.route('project', { path: '/project/:id' }, function() {
    this.route('board');
  });

  this.route('story', function() {
    this.route('new', { path: '/new/:id' });
  });

  this.route('stories', function() {
    this.route('edit', { path: '/edit/:id' });
  });

  this.route('tags', function() {
    this.route('edit', { path: '/edit/:id' });
  });
  this.route('steps', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:id' });
  });
});

export default Router;
