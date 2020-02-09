import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tile/tile', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a tile', async function(assert) {
    await render(hbs`<Tile::Tile />`);
    assert.dom('.tile').exists();
  });

  test('it renders a tile with an icon', async function(assert) {
    this.setProperties({
      state: { tiles: ["X"] },
      pos: 0
    })
    await render(hbs`<Tile::Tile @pos={{this.pos}} @state={{this.state}}/>`);
    assert.dom('.tile').hasText("X");
  });
});
