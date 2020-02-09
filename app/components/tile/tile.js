import Component from '@glimmer/component';

export default class TileTileComponent extends Component {
  get icon() {
    let { state, pos } = this.args;
    return state ? state.tiles[pos] : "";
  }

}
