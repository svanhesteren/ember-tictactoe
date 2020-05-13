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

  test('X wins when finishing a row and reset the game when clicking again', async function(assert) {
    await render(hbs`<Board::Board />`);
    const tiles = findAll('.tile');
    await click(tiles[0]); // x
    await click(tiles[1]); // o
    await click(tiles[3]); // x
    await click(tiles[2]); // o
    await click(tiles[6]); // x
    assert.dom(this.element).containsText("Winner is X");
    assert.dom(this.element).containsText("Player X: 1");
    await click(tiles[0]);
    assert.dom(tiles[0]).hasText("X");
    assert.dom(tiles[1]).hasNoText();
    assert.dom(this.element).containsText("Player turn: O");
  })

  test('all tiles filled with no winning line is a draw, resets the game when clicking again', async function(assert) {
    await render(hbs`<Board::Board />`);
    const tiles = findAll('.tile');
    await click(tiles[0]); // x
    await click(tiles[1]); // o
    await click(tiles[2]); // x

    await click(tiles[3]); // o
    await click(tiles[5]); // x
    await click(tiles[4]); // o

    await click(tiles[6]); // x
    await click(tiles[8]); // o
    await click(tiles[7]); // x
    assert.dom(this.element).containsText("Its a draw!")
    assert.dom(this.element).containsText("Draw: 1")
    await click(tiles[0]);
    assert.dom(tiles[0]).hasText("X");
    assert.dom(tiles[1]).hasNoText();
    assert.dom(this.element).containsText("Player turn: O");
  })
});
