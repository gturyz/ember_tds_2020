import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            tags: this.store.findAll('tag')
        }
    },
    actions: {        
        showDeleteModal(data) {
            let tmp = confirm("Confirmer la suppression de "+data.name+" ?");
            if (tmp) {
                this.store.findRecord('tag', data.id).then(function(tag) {
                    tag.deleteRecord();
                    tag.get('isDeleted');
                    tag.save();
                });
            }
        }
    }
});
