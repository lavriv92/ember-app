import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      let controller = this.controller;
      let session = {
        username: controller.get('username'),
        password: controller.get('password')
      };

      Ember.$.post('/url', session);
    }
  }
});
