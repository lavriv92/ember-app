import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    //controller.set('error', 'some error');

    setTimeout(function () {
      controller.set('error', null);
    }, 2000);
  },
  renderTemplate() {
    let loggedIn = false;
    if(loggedIn) {
      this.render('application');
    } else {
      this.transitionTo('sessions.login');
      this.render('anonymous');
    }
  }
});
