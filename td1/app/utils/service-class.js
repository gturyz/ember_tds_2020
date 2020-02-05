import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
  services: [],
  remises: {
    "B22":0.05,
    "AZ":0.01,
    "UBOAT":0.02
  },
  isChecked: false,
  isRemiseValide: computed('remises', 'valPromo', function () {
    return this.remises.hasOwnProperty(this.valPromo)
  }),
  valPromo: "",
  countActive: computed('services.@each.active', function () {
    var nb = 0
    for (const key in this.services) {
        if (this.services.hasOwnProperty(key)) {
            nb += this.services[key].active?1:0            
        }
    }
    return nb
  }),
  sumRemActive: computed('sumActive', 'remActive', function () {
    return this.sumActive - this.remActive
  }),
  sumActive: computed('services.@each.active', function () {
    var sum = 0
    for (const key in this.services) {
        if (this.services.hasOwnProperty(key)) {
            sum += this.services[key].active?this.services[key].price:0            
        }
    }
    return sum
  }),
  remActive: computed('remises', 'valPromo', 'sumActive', function () {
    return this.remises[this.valPromo]*this.sumActive
  })
});