import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    nom: DS.attr("string"),
    prenom: DS.attr("string"),
    email: DS.attr("string")
});
