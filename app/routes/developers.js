import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return {
			developers: this.store.findAll('developer'),
			selectedDeveloper: undefined
		}
	},
	actions: {
		removeDeveloperItem(id) {
			this.store.findRecord('developer', id).then(function(developer) {
				developer.deleteRecord();
				developer.get('isDeleted');
				developer.save();
			});
		},
		updateDeveloper(data) {
			this.store.findRecord('developer', data.id).then(function(developer) {
				developer.set('name',data.developerName);
				developer.save();
			});
		}
	}
});