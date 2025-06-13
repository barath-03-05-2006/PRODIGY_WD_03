
import TicTacToe from "../components/TicTacToe";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Tic Tac Toe</h1>
        <TicTacToe />
      </div>
    </div>
  );
};

export default Index;
