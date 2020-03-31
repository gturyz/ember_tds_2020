import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    backlog: computed('stories.@each.step.id', 'boardVisible', function () {
        let stories = [];
        if (this.boardVisible=='project.board') {
            this.model.stories.forEach(story => {
                if (story.step.get('id') === undefined) stories.push(story);
            })
            return stories;
        } else return this.model.stories;
    }),
    session: computed(function() {
        return Ember.getOwner(this).lookup('service:router');
    }),
    boardVisible: computed("session.currentRouteName", function() {
        return this.session.currentRouteName;
    }),
    actions: {
        setBoardVisible() {
            this.set('boardVisible', true);
        }
    }
});
