import React, { useState } from "react";
import GameGrid from "./GameGrid.js";
import GameGrid from "GameGrid.js";

function Game() {
   // Step 3: Initialize state
   const [moves, setMoves] = useState(new Array(9).fill(""));
   const [turn, setTurn] = useState("X");

   function gridClick(whichSquare) {
      // Step 3: Handle square click
      if (moves[whichSquare] === "") { // Only update if the square is empty
         const movesCopy = [...moves];
         movesCopy[whichSquare] = turn;
         setMoves(movesCopy);

         // Step 4: Alternate turns
         setTurn(turn === "X" ? "O" : "X");
      }
   }

   function newGame() {
      // Step 5: Reset the game state
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
