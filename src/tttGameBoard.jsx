import { useState } from "react";

export function DisplayGameboard({ board }) {
  const Rows = ({ board }) => {
    return board.map((row, i) => {
      return (
        <div className="row" key={i}>
          <Cells row={row} />
        </div>
      );
    });
  };

  const Cells = ({ row }) => {
    return row.map((cell, j) => {
      return (
        <div className="cell" key={j}>
          {cell}
        </div>
      );
    });
  };

  return (
    <div className="gameBoard">
      <Rows board={board} />
    </div>
  );
}

export default function TicTacToeBoard() {
  const [board, setBoard] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]);

  return <DisplayGameboard board={board} />;
}
