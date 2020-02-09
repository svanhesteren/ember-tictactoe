import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | info', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders when X has won', async function(assert) {
    this.setProperties({
      state: {
        winner: "X",
        done: true,
        turnX: true
      }
    });
    await render(hbs`<Info @state={{this.state}} />`);
    assert.dom(this.element).hasText("Winner is X")
  });

  test('it renders when player Os turn is', async function(assert) {
    this.setProperties({
      state: {
        winner: null,
        done: false,
        turnX: false
      }
    })
    await render(hbs`<Info @state={{this.state}} />`);
    assert.dom(this.element).hasText("Player turn: O");
  })

  test('it renders a draw', async function(assert) {
    this.setProperties({
      state: {
        winner: null,
        done: true,
        turnX: false
      }
    })
    await render(hbs`<Info @state={{this.state}} />`);
    assert.dom(this.element).hasText("Its a draw!");
  })
});
