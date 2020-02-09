import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BoardBoardComponent extends Component {
  @tracked state = {
    tiles: [
      null, null, null,
      null, null, null,
      null, null, null
    ]
  }
}
