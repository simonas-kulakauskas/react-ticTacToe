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

/*
TODO: Implement a function/functions to check whether there is a match in the:
TODO:     - Horizontal
TODO:     - Vertical
TODO:     - Diagonal
TODO: positions.

! Write tests before writing functions :)

*/
