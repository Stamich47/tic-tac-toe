import Board from './Board';
import { useState } from 'react';

export default function Game() {
  const [XIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {}

  return (
    <div className="game">
      <div className="game-board">
        <Board XIsNext={XIsNext} sqaures={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
