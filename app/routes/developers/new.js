import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    model(){
        return EmberObject.create();
    },
    actions: {
		createNewDeveloper(data) {
            debugger
			let developer = this.store.createRecord('developer', {
				identity: data.identity
			});
            developer.save().then(()=>this.transitionTo("developers"));
		}
    }
});
