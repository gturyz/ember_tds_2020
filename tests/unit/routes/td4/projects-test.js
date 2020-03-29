import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | td4/projects', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:td4/projects');
    assert.ok(route);
  });
});
