import React, { useState } from "react";
import GameGrid from "./GameGrid.js";

function Game() {
  // State variables for moves and turn
  const [moves, setMoves] = useState(new Array(9).fill(""));
  const [turn, setTurn] = useState("X");

  function gridClick(whichSquare) {
    // Update the moves and alternate turns if square is empty
    if (moves[whichSquare] === "") {
      const movesCopy = [...moves];
      movesCopy[whichSquare] = turn;
      setMoves(movesCopy);
      setTurn(turn === "X" ? "O" : "X");
    }
  }

  function newGame() {
    // Reset the game
    setMoves(new Array(9).fill(""));
    setTurn("X");
  }

  return (
    <>
      <h1>Tic-Tac-Toe</h1>        
      <GameGrid moves={moves} click={gridClick} />
      <p>
        Turn: <strong className={turn}>{turn}</strong>
      </p>
      <p>
        <button onClick={newGame}>New Game</button>
      </p>
    </>
  );
}

export default Game;
