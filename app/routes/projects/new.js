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
            let dueDate = new Date(data.dueDate);
            if (data.dueDate===""|| (dueDate.getDate()==1&&dueDate.getMonth()==0&&dueDate.getFullYear()==1970)) {
                dueDate = "00-00-0000";
            } else {
                dueDate = data.dueDate
            }
            let startDate = new Date(startDate);
            if (data.startDate===""|| (startDate.getDate()==1&&startDate.getMonth()==0&&startDate.getFullYear()==1970)) {
                startDate = "00-00-0000";
            } else {
                startDate = data.startDate
            }
			let project = this.store.createRecord('project', {
                name: data.name,
                descriptif: data.descriptif,
                startDate: new Date(startDate),
                dueDate: new Date(dueDate),
                owner: self.owner
			});
            project.save().then(()=>this.transitionTo("projects"));
        },
        selectOption(data) {
            this.owner = this.store.find('developer', data.target.value);
        }
    }
});
