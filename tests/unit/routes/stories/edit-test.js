import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | stories/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:stories/edit');
    assert.ok(route);
  });
});
