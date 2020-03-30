import DS from 'ember-data';

export default DS.Model.extend({
    identity: DS.attr('string'),
    stories: DS.hasMany('stories')
});
