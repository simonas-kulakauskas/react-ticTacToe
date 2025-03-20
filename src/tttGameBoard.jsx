import { useState } from "react";
import "./tttGameBoard.css";

function DisplayGameboard({ board }) {
  const Rows = ({ board }) => {
    return board.map((row, i) => {
      return (
        <div className="row" key={i}>
          <Cells row={row} rowIndex={i} />
        </div>
      );
    });
  };

  const Cells = ({ row, rowIndex }) => {
    return row.map((cell, j) => {
      function handleClick() {
        console.log("Cell index: " + j);
        console.log("Row Index: " + rowIndex);
      }

      return (
        <div className="cell" key={j} onClick={handleClick}>
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
    ["", "", ""],
    ["X", "X", "X"],
    ["O", "O", "O"],
  ]);

  return <DisplayGameboard board={board} />;
}
