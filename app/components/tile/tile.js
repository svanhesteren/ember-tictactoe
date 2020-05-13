import Component from '@glimmer/component';

export default class TileTileComponent extends Component {
  get icon() {
    let { tiles, pos } = this.args;
    return tiles ? tiles[pos] : "";
  }
}
