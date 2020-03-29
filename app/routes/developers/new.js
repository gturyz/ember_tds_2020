import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
		createNewDeveloper(data) {
			let developer = this.store.createRecord('developer', {
				name: data.developerName
			});
            developer.save();
            data.developerName = ''; //retoure à "" pour le input
		}
    }
});
