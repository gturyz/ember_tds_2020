import Route from '@ember/routing/route';

export default Route.extend({
  templateName: 'contacts/add',
  actions:{
  save:function(contact){
    contact.save().then(()=>this.transitionTo("contacts"));
  }
}
});
