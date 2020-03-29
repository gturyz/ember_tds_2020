import Route from '@ember/routing/route';

export default Route.extend({    
	model() {
		return {
			projects: this.store.findAll('project'),
            selectedProject: undefined
        }
	},
	actions: {
		updateProject(data) {
			this.store.findRecord('project', data.id).then(function(project) {
				project.set('name',data.name);
				project.set('descriptif',data.descriptif);
				project.set('startDate',data.startDate);
				project.set('dueDate',data.dueDate);
				project.set('ownerId',data.ownerId);
				project.save();
			});
        },
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
