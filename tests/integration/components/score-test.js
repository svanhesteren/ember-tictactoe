import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | score', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.setProperties({
      score: {
        p1Score: 5,
        p2Score: 2,
        tie: 7
      }
    })

    await render(hbs`<Score @score={{this.score}} />`);
    assert.dom(this.element).hasText('Score Player X: 5 Player O: 2 Draw: 7');
  });
});
