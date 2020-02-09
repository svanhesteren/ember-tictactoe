import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | board/board', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Board::Board />`);
    assert.dom('.board').exists();
  });

  test('tile changes to X when clicked', async function(assert) {
    await render(hbs`<Board::Board />`);
    assert.dom('.tile').hasNoText();
    await click('.tile');
    assert.dom('.tile').hasText("X");
  });
});
