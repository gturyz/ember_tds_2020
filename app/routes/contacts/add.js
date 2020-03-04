import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model(){
    return EmberObject.create();
  },
  actions:{
    save:function(datas){
      let store=this.get('store');
      let contact=store.createRecord('contact', JSON.parse(JSON.stringify(datas)));
      contact.save();
      this.transitionTo('contacts');
    }
  }
});
