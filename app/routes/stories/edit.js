import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
    model({ id }) {
        return RSVP.hash({
            colors: ['red', 'blue', 'grey', 'green', 'yellow', 'black'],
            developers: this.store.findAll('developer'),
            tags: this.store.findAll('tag'),
            tag: EmberObject.create({
                title: "",
                color: "red"
            }),
            story: this.store.find('story', id)
        })
    },
    actions: {
		updateStory(data, project, developer) {
			this.store.findRecord('story', data.id).then(function(story) {
				story.set('code',data.code);
				story.set('description',data.description);
				story.set('project',project);
				story.set('tags',data.tags);
				story.set('developer',developer);
				story.save();
			}).then(()=>this.transitionTo("project", project.get('id')));
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
