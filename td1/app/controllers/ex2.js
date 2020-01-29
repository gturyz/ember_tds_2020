import Controller from '@ember/controller';
import {set,get} from '@ember/object';

export default Controller.extend({
    actions: {
        toggleActive (service) {
            // service.active = !service.active
            set(service,'active', !get(service,'active'));
        }
    }
});
