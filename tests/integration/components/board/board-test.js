import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | board/board', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Board::Board />`);
    assert.dom('.board').exists();
  });

  test('tiles change when clicked', async function(assert) {
    await render(hbs`<Board::Board />`);
    assert.dom('.tile').hasNoText();
    let tiles = findAll('.tile');
    // player X
    await click(tiles[0]);
    assert.dom(tiles[0]).hasText("X");
    // player O
    await click(tiles[1]);
    assert.dom(tiles[1]).hasText("O");
  });


});
