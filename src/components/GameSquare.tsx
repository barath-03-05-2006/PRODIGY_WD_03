
import React from 'react';
import { Player } from './TicTacToe';

interface GameSquareProps {
  value: Player;
  onClick: () => void;
}

const GameSquare = ({ value, onClick }: GameSquareProps) => {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg text-3xl font-bold text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed"
      disabled={value !== null}
    >
      {value}
    </button>
  );
};

export default GameSquare;
