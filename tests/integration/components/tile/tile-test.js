import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tile/tile', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a tile', async function(assert) {
    this.setProperties({
      pos: 0,
      onClick: function() {}
    })
    await render(hbs`<Tile::Tile @pos={{this.pos}} @onClick={{this.onClick}} />`);
    assert.dom('.tile').exists();
  });

  test('it renders a tile with an icon', async function(assert) {
    this.setProperties({
      state: { tiles: ["X"] },
      pos: 0,
      onClick: function() {}
    })
    await render(hbs`<Tile::Tile @pos={{this.pos}} @state={{this.state}} @onClick={{this.onClick}}/>`);
    assert.dom('.tile').hasText("X");
  });
});
