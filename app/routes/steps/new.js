import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    model(){
        return EmberObject.create();
    },
    actions: {
		createNewStep(data) {
			let step = this.store.createRecord('step', {
				title: data.title
			});
            step.save().then(()=>this.transitionTo("steps"));
		}
    }
});
