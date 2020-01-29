import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
  MAX:100,
  content:'Entrez votre texte',
  info:'',
  size: computed('content', 'MAX', function () {
    return this.MAX - this.content.length
  }),
  style: computed('size', function () {
    return this.size>=50?'alert-primary':this.size>=20?'alert-warning':'alert-danger'
  }),
  alertVisible: computed('info', function () {
    return this.info!==""?true:false
  })
});