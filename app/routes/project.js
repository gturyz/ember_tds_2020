import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { computed } from '@ember/object';

export default Route.extend({
    model({id}) {
        return RSVP.hash({
            project: this.store.find('project', id),
            stories: this.store.query('story', { filter: { project: id } }),
            boardVisible: false,
            backlog: computed('stories.@each.step', 'boardVisible', function () {
                let stories = this.stories;
                if (this.boardVisible) {
                    return stories.filterBy('step', true);
                } else return stories;
            })
        })
    }
});
