// This is the Ember router. If you want to add a new route for a server, follow the pattern below.
// Documentation for the Ember router can be found here - https://guides.emberjs.com/v2.5.0/routing/
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('partials/games-tab/servers/minetest/index', { path: '/minetest' });
  this.route('partials/games-tab/servers/quakeworld/index', { path: '/quakeworld' });
  this.route('partials/games-tab/servers/quake2/index', { path: '/quake2' });
  this.route('partials/games-tab/servers/zomboid/index', { path: '/zomboid' });
  this.route('partials/games-tab/servers/minecraft/index', { path: '/minecraft' });
  this.route('partials/games-tab/servers/rust/index', { path: '/rust' });
  this.route('partials/games-tab/servers/gmod/index', { path: '/gmod' });
  this.route('partials/games-tab/servers/terraria/index', { path: '/terraria' });
  this.route('bingo', { path: '/bingo' });
  this.route('not-found', { path: '/*path' });
});

export default Router;
