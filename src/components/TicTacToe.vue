<template>
  <div>
    <v-btn @click="game.reset()" color="primary"> new Game </v-btn>
    <div v-for="(row, rowIndex) in game.grid" :key="rowIndex" class="d-flex">
      <template v-for="(cell, cellIndex) in row" :key="cellIndex">
        <v-hover v-slot="{ isHovering, props }">
          <div
            class="cell bg-primary ma-1 d-flex justify-center"
            :class="isHovering ? 'elevation-4' : ''"
            v-bind="props"
            @click="onClick(rowIndex, cellIndex, currentGame)"
          >
            <h1 class="font-weight-black text-secondary text-h1">
              {{ cell }}
            </h1>
          </div>
        </v-hover>
      </template>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
class TicTacToe {
  constructor(grid = false) {
    this.grid = grid || [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  reset() {
    this.grid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  insert(move, symbol) {
    let row = this.grid[move[0]];
    row.splice(move[1], 1, symbol);
  }
  checkWin(player) {
    let win = false;
    let count;
    for (let i = 0; i < this.grid.length; i++) {
      // Check three in a row
      if (win) break;
      win = this.grid[i].every((cell) => cell === player);

      // Check three in a column
      if (win) break;
      count = 0;
      this.grid.forEach((row) => {
        if (row[i] === player) count++;
      });
      win = count === 3;
    }

    if (!win) {
      count = 0;
      for (let k = 0; k < 3; k++) {
        if (this.grid[k][k] === player) count++;
      }
      win = count === 3;
    }
    if (!win) {
      count = 0;
      let i = 0;
      for (let l = 2; l > -1; l--) {
        if (this.grid[l][i] === player) count++;
        i++;
      }
      win = count === 3;
    }
    return win;
  }

  getPossibleMoves() {
    let moves = [];
    this.grid.forEach((row, x) => {
      row.forEach((cell, y) => {
        if (cell == "") moves.push([x, y]);
      });
    });
    return moves;
  }
}

class Player {
  constructor() {
    this.nodesMap = new Map();
  }

  findBestMove(game, maximizing, depth = 0) {
    if (depth == 0) this.nodesMap.clear();

    //is game over or a tie
    if (game.checkWin("o")) {
      return -100 + depth;
    } else if (game.checkWin("x")) {
      return 100 - depth;
    }
    let tie = true;
    game.grid.forEach((row) => {
      if (row.includes("")) tie = false;
    });
    if (tie) return 0;

    // X is our computer and our maximizing player
    if (maximizing) {
      let best = -100;

      game.getPossibleMoves().forEach((move) => {
        // Create new game with current game state
        const childNode = new TicTacToe([
          [...game.grid[0]],
          [...game.grid[1]],
          [...game.grid[2]],
        ]);

        // Play next move
        childNode.insert(move, "x");

        // recursively find and play next move for O
        const nodeValue = this.findBestMove(childNode, false, depth + 1);
        best = Math.max(best, nodeValue);

        if (depth == 0) this.nodesMap.set(nodeValue, move);
      });
      if (depth === 0) {
        let moveToBeMade = this.nodesMap.get(best);
        return moveToBeMade;
      }
      return best;
    } else {
      // O is what the human player might do to 'minimize' the computers game. Computer will assume best moves from o
      let best = 100;

      game.getPossibleMoves().forEach((move) => {
        const childNode = new TicTacToe([
          [...game.grid[0]],
          [...game.grid[1]],
          [...game.grid[2]],
        ]);
        childNode.insert(move, "o");
        let nodeValue = this.findBestMove(childNode, true, depth + 1);

        best = Math.min(best, nodeValue);

        if (depth == 0) this.nodesMap.set(nodeValue, move);
      });
      if (depth === 0) {
        let moveToBeMade = this.nodesMap.get(best);
        return moveToBeMade;
      }
      return best;
    }
  }
}
let player = new Player();
let game = reactive(new TicTacToe());

function onClick(x, y) {
  game.insert([x, y], "o");
  let move = player.findBestMove(game, true, 0);
  game.insert(move, "x");
}
</script>
<style>
.cell {
  width: 100px;
  height: 100px;
}
</style>
