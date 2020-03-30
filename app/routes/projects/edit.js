import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model({id}) {
        return RSVP.hash({
            project: this.store.find('project', id),
            developers: this.store.findAll('developer'),
            owner: ""
        })
    },
    actions: {        
		updateProject(data) {
            let self = this;
			this.store.findRecord('project', data.id).then(function(project) {
				project.set('name',data.name);
				project.set('descriptif',data.descriptif);
				project.set('startDate',new Date(data.startDate));
				project.set('dueDate',new Date(data.dueDate));
				project.set('owner',self.owner);
				project.save();
			}).then(()=>this.transitionTo("projects"));
        },
        selectOption(data) {
            this.owner = this.store.find('developer', data.target.value);
        }
    }
});
