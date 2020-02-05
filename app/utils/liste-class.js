import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
    dispoItems: null,
    includedItems: null,
    dispoItemsIds_: null,
    includedItemsIds_: null,
    dispoItems_: computed('dispoItems', function () {
        // Array.map
        return null
    }),
    includedItems_: computed('includedItems', function () {
        return null
    })
});