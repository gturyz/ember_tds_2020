import Route from '@ember/routing/route';

export default Route.extend({    
	model() {
		return {
			projects: this.store.findAll('project')
        }
	},
	actions: {
        showDeleteModal(data) {
            let tmp = confirm("Confirmer la suppression de "+data.name+" ?");
            if (tmp) {
                this.store.findRecord('project', data.id).then(function(project) {
                    project.deleteRecord();
                    project.get('isDeleted');
                    project.save();
                });
            }
        }
	}
});
