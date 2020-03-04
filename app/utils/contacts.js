import EmberObject, { computed } from '@ember/object';
import { alias,filterBy } from '@ember/object/computed';

export default EmberObject.extend({
  init(params){
    this._super(...arguments);
    this.set('datas',params);
  },
  contacts: computed('datas.@each.isDeleted','filter',function(){
    let notDeleted=this.get('datas').filterBy('isDeleted',false);
    if(this.get('filter')){
      return notDeleted.filter((item)=>{
        let filter=this.get('filter');
        return item.get('nom').includes(filter) || item.get('prenom').includes(filter) || item.get('email').includes(filter)
      })
    }
    return notDeleted;
  }),
  deleteds: filterBy('datas', 'isDeleted', true),
  deletedCount: alias('deleteds.length')
});