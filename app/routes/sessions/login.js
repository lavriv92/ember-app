import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {

  },

  actions: {
    login() {
      let controller = this.controller;

      let username = controller.get('username');
      let email = controller.get('password');
    }
  }
});
