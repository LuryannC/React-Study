import {useMemo, useState} from 'react';

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from './components/Log';
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';


const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

// const INITIAL_GAME_BOARD = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null]
// ];

const INITIAL_GAME_BOARD = Array(3).fill(null).map(() => Array(3).fill(null));

function checkForWinner(gameBoard){
  // let localWinner = null;
  // for(const combination of WINNING_COMBINATIONS){
  //   const firstSquare = gameBoard[combination[0].row][combination[0].column];
  //   const secondSquare = gameBoard[combination[1].row][combination[1].column];
  //   const thirdSquare = gameBoard[combination[2].row][combination[2].column];

  //   if(firstSquare && firstSquare === secondSquare && secondSquare === thirdSquare){
  //     localWinner = firstSquare;
  //   }
  // }
  // return localWinner;

  for(const combination of WINNING_COMBINATIONS){
    const [firstSquare, secondSquare, thirdSquare] = combination.map(square => gameBoard[square.row][square.column]);
    
    if(firstSquare && firstSquare === secondSquare && secondSquare === thirdSquare){
      return firstSquare;
    }
  }
  return null;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns){
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
  }

  return gameBoard;
}


function deriveActivePlayer(gameTurns){
  // let currentPlayer = 'X';

  // if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
  //   currentPlayer = 'O';
  // }

  // return currentPlayer;
  
  return gameTurns.length % 2 === 0 ? 'X' : 'O';
}

function App() {
  const [ players, setPlayers ] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = useMemo(() => deriveGameBoard(gameTurns), [gameTurns]);  
  //const winner = checkForWinner(gameBoard);
  const winner = players[useMemo(() => checkForWinner(gameBoard), [gameBoard])];

  let hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    }); 
  }

  function handleRematch(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerSymbol, newName){
    setPlayers(prevPlayers => {return{...prevPlayers, [playerSymbol]: newName};});
  }

  return <main>
    <div id="game-container">
      {/* PLAYERS */}
      <ol id="players" className='highlight-player'>
        <Player initialName={PLAYERS.X} symbol={"X"} isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
        <Player initialName={PLAYERS.O} symbol={"O"} isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
      </ol>

      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRematch}/>}

      {/* GAME BOARD */}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
    </div>
    
    {/* LOG */}
    <Log turns={gameTurns}/>
  </main>;
}

export default App
