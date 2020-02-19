import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
    step: true,
    init(params){
      this._super(...arguments);
      this.set('dispoItems', params);
      this.set('includedItems',[]);
      this.set('selectedDispoItemsIds',[]);
      this.set('selectedIncludedItemsIds',[]);
    },
    selectedDispoItems: computed('selectedDispoItemsIds.[]','dispoItems.[]', function() {
      return this.get('selectedDispoItemsIds').map((id) => {
        return this.get('dispoItems').findBy('id', id);
      });
    }),
    selectedIncludedItems: computed('selectedIncludedItemsIds.[]','includedItems.[]', function() {
      return this.get('selectedIncludedItemsIds').map((id) => {
        return this.get('includedItems').findBy('id', id);
      });
    })
});