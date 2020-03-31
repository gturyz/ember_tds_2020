import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return {
			steps: this.store.findAll('step')
        }
	},
	actions: {
        showDeleteModal(data) {
            let tmp = confirm("Confirmer la suppression de "+data.identity+" ?");
            if (tmp) {
                this.store.findRecord('step', data.id).then(function(step) {
                    step.deleteRecord();
                    step.get('isDeleted');
                    step.save();
                });
            }
        }
	}
});