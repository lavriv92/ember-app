import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    login() {
      let controller = this.controller;
      let session = {
        email: controller.get('email'),
        password: controller.get('password')
      };

      let login = Ember.$.post('http://localhost:1337/api/account/email-login', session);

      login.then((result) => {
        this.store.set('token', result.token);
        this.store.set('user', result.user);

        this.transitionTo('index');
      }, (error) => {
        console.log(error);
      });
    }
  }
});
