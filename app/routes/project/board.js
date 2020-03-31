import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model() {
        let {id} = this.paramsFor('project');
        return RSVP.hash({
            project: this.store.find('project', id),
            steps: this.store.findAll('step')
        })
    },
    actions: {
        addToStep(story, step) {
            this.store.findRecord('story', story).then(function(story) {
				story.set('step', step);
                story.save();
            });
        }
    }
});