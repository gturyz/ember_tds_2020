import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            stories: this.store.findAll('story')
        }
    },
    actions: {        
        showDeleteModal(data) {
            let tmp = confirm("Confirmer la suppression de "+data.name+" ?");
            if (tmp) {
                this.store.findRecord('story', data.id).then(function(story) {
                    story.deleteRecord();
                    story.get('isDeleted');
                    story.save();
                });
            }
        }
    }
});
