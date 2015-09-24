import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    let loggedIn = false;
    if(loggedIn) {
      this.render('application');
    } else {
      this.render('anonymous');
    }
  }
});
