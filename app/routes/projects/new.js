import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    model(){
        return {
            project: EmberObject.create(),
            developers: this.store.findAll('developer'),
            ownerId: ""
        }
    },
    actions: {
		createNewProject(data, o) {
			let project = this.store.createRecord('project', {
                name: data.name,
                descriptif: data.descriptif,
                startDate: data.startDate,
                dueDate: data.dueDate,
                ownerId: o
			});
            project.save().then(()=>this.transitionTo("projects"));
        },
        selectOption(data) {
            this.ownerId = data.target.value;
        }
    }
});
