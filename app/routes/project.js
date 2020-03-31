import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model({id}) {
        return RSVP.hash({
            project: this.store.find('project', id),
            stories: this.store.query('story', { filter: { project: id } })
        })
    }
});
