import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('projects');
  this.route('project', {path: '/project/:project_id'});
  this.route('calendar');
});

export default Router;
