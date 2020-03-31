import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    order: DS.attr('number'),
    stories: DS.hasMany('story')
});
