import Route from '@ember/routing/route';

export default Route.extend({
    model({id}) {
        return this.store.find('step', id);
    },
    actions: {        
		updateStep(data) {
			this.store.findRecord('step', data.id).then(function(step) {
				step.set('title',data.title);
				step.save();
			}).then(()=>this.transitionTo("steps"));
        },
    }
});
