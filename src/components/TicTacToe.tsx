
import React, { useState } from 'react';
import GameBoard from './GameBoard';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

export type Player = 'X' | 'O' | null;
export type Board = Player[];

const TicTacToe = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'tie' | null>(null);

  const checkWinner = (board: Board): Player | 'tie' | null => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every(square => square !== null)) {
      return 'tie';
    }

    return null;
  };

  const handleSquareClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameResult = checkWinner(newBoard);
    if (gameResult) {
      setWinner(gameResult);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  const getStatusMessage = () => {
    if (winner === 'tie') return "It's a tie!";
    if (winner) return `Player ${winner} wins!`;
    return `Current player: ${currentPlayer}`;
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-xl font-semibold text-gray-700 min-h-[28px]">
        {getStatusMessage()}
      </div>
      
      <GameBoard board={board} onSquareClick={handleSquareClick} />
      
      <Button 
        onClick={resetGame}
        variant="outline"
        className="flex items-center gap-2"
      >
        <RotateCcw size={16} />
        New Game
      </Button>
    </div>
  );
};

export default TicTacToe;
