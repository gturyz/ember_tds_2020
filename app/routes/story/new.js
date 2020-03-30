import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
    model({ id }) {
        return RSVP.hash({
            colors: ['red', 'blue', 'grey', 'green', 'yellow', 'black'],
            project: this.store.find('project', id),
            developers: this.store.findAll('developer'),
            tags: this.store.findAll('tag'),
            tag: EmberObject.create({
                title: "",
                color: "red"
            }),
            story: EmberObject.create(),
            developerId: ""
        })
    },
    actions: {
		createNewStory(data, project) {
            let story = this.store.createRecord('story', {
                code: data.code,
                description: data.description,
                project: project,
                tags: data.tags,
                developer: data.developer
            });
            story.save().then(()=>this.transitionTo("project", project.id));
        },
        createNewTag(data) {
            let tag = this.store.createRecord('tag', {
                title: data.title,
                color: data.color
			});
            tag.save();
        }
    }
});
