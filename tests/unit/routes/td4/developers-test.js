import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | td4/developers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:td4/developers');
    assert.ok(route);
  });
});
