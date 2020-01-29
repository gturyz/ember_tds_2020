import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
  services: [],
  countActive: computed('services.@each.active', function () {
    var nb = 0
    for (const key in this.services) {
        if (this.services.hasOwnProperty(key)) {
            nb += this.services[key].active?1:0            
        }
    }
    return nb
  }),
  sumActive: computed('services.@each.active', function () {
    var sum = 0
    for (const key in this.services) {
        if (this.services.hasOwnProperty(key)) {
            sum += this.services[key].active?this.services[key].price:0            
        }
    }
    return sum
  })
});