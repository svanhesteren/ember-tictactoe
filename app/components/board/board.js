import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BoardBoardComponent extends Component {
  @tracked state = {
    tiles: Array(9).fill(null)
  }

  @action placeMove(pos) {
    let tiles = this.state.tiles;
    tiles[pos] = "X";
    this.state = {
      ...this.state,
      tiles: this.state.tiles.map((tile, index) => {
        return index === pos ? "X" : tile
      }
    )}
  }
}
