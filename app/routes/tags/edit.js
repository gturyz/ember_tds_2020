import Route from '@ember/routing/route';

export default Route.extend({
    model({id}) {
        return {
            colors: ['red', 'blue', 'grey', 'green', 'yellow', 'black'],
            tag: this.store.find('tag', id)            
        }
    },
    actions: {        
		updateTag(data) {
			this.store.findRecord('tag', data.get('id')).then(function(tag) {
				tag.set('title',data.get('title'));
				tag.set('color',data.get('color'));
				tag.save();
			}).then(()=>this.transitionTo("tags"));
        },
    }
});
