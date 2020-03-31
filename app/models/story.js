import DS from 'ember-data';

export default DS.Model.extend({
    code: DS.attr('string'),
    description: DS.attr('string'),
    project: DS.belongsTo('project'),
    tags: DS.hasMany('tag'),
    developer: DS.belongsTo('developer'),
    step: DS.belongsTo('step')
  });
