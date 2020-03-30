import Route from '@ember/routing/route';

export default Route.extend({
    model({id}) {
        return this.store.find('developer', id);
    },
    actions: {        
		updateDeveloper(data) {
			this.store.findRecord('developer', data.id).then(function(developer) {
				developer.set('identity',data.identity);
				developer.save();
			}).then(()=>this.transitionTo("developers"));
        },
    }
});
