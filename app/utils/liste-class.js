import EmberObject, { computed } from '@ember/object';
import { map } from '@ember/object/computed';
 
export default EmberObject.extend({
    dispoItems: [],
    includedItems: [],
    dispoItemsIds_: [],
    includedItemsIds_: [],
    selectedDispoItems: computed('dispoItemsIds_.[]','dispoItems.[]', function() {
      return this.get('dispoItemsIds_').map((id) => {
        return this.get('dispoItems').findBy('id', id);
      });
    }),
    selectedIncludedItems: computed('includedItemsIds_.[]','includedItems.[]', function() {
      return this.get('includedItemsIds_').map((id) => {
        return this.get('includedItems').findBy('id', id);
      });
    })
});