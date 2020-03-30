import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    model(){
        return {
            project: EmberObject.create(),
            developers: this.store.findAll('developer'),
            owner: ""
        }
    },
    actions: {
		createNewProject(data) {
            let self = this;
			let project = this.store.createRecord('project', {
                name: data.name,
                descriptif: data.descriptif,
                startDate: new Date(data.startDate),
                dueDate: new Date(data.dueDate),
                owner: self.owner
			});
            project.save().then(()=>this.transitionTo("projects"));
        },
        selectOption(data) {
            this.owner = this.store.find('developer', data.target.value);
        }
    }
});
