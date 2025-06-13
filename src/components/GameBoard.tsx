
import React from 'react';
import GameSquare from './GameSquare';
import { Board } from './TicTacToe';

interface GameBoardProps {
  board: Board;
  onSquareClick: (index: number) => void;
}

const GameBoard = ({ board, onSquareClick }: GameBoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-4 bg-white rounded-lg shadow-lg">
      {board.map((value, index) => (
        <GameSquare
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
