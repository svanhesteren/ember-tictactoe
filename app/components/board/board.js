import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export default class BoardBoardComponent extends Component {
  @tracked state = {
    tiles: Array(9).fill(null),
    turnX: true,
    winner: null,
    score: {
      p1Score: 0,
      p2Score: 0,
      tie: 0,
    },
    done: false
  }

  whichTileIcon() {
    return this.state.turnX ? "X" : "O";
  }

  winner(tiles) {
    // I loop over all the possible winning lines that can exist
    // if all the indexes in one line are the same value X or O in the given tiles
    // it means we have a winner else we have not
    // for ex. with line [2, 4, 6];
    // tiles[2] === tiles[4] === tiles[6] (and they are not null)
    // means line [2, 4, 6] wins
    for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
      const [ a, b, c ] = WIN_COMBINATIONS[i];
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        return tiles[a];
      }
    }
    return null;
  }

  isDone(tiles) {
    return tiles.every(tile => tile) || !!this.winner(tiles);
  }

  reset() {
    this.state = {
      ...this.state,
      tiles: Array(9).fill(null),
      winner: null,
      turnX: true,
      done: false
    }
  }

  calculateScore() {
    if (!this.state.done) return
    let state = this.state;
    let score = state.score;
    switch(state.winner) {
      case "X":
        this.state = { ...state, score: { ...score, p1Score: score.p1Score + 1} };
        break;
      case "O":
        this.state = { ...state, score: { ...score, p2Score: score.p2Score + 1 } };
        break;
      case null:
        this.state = { ...state, score: { ...score, tie: score.tie + 1 } };
        break;
    }
  }

  @action placeMove(pos) {
    if (this.state.done) this.reset();
    if (this.state.tiles[pos]) return;
    const newTiles = this.state.tiles.map((tile, index) => {
        return index === pos ? this.whichTileIcon() : tile
      }
    );
    this.state = {
      ...this.state,
      tiles: newTiles,
      turnX: !this.state.turnX,
      winner: this.winner(newTiles),
      done: this.isDone(newTiles)
    }
    this.calculateScore();
  }
}
