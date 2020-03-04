import Route from '@ember/routing/route';
import Contacts from '../utils/contacts';

export default Route.extend({
  model(){
    let storedContacts = this.get('store').findAll('contact');
    return Contacts.create(storedContacts);
  },
  actions: {
      delete () {

      }
  }
});
