import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return {
			developers: this.store.findAll('developer'),
            selectedDeveloper: undefined
        }
	},
	actions: {
        showDeleteModal(data) {
            let tmp = confirm("Confirmer la suppression de "+data.identity+" ?");
            if (tmp) {
                this.store.findRecord('developer', data.id).then(function(developer) {
                    developer.deleteRecord();
                    developer.get('isDeleted');
                    developer.save();
                });
            }
        }
	}
});