import "./App.css";
import { useState } from "react";

function App() {
  const [turn, setTurn] = useState(1); // Default's to 'X' Turn (1).
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  function handleClick(i, j) {
    setBoard(
      board.map((row, g) => {
        if (i !== g) {
          return row;
        } else {
          let newRow = row;
          newRow[j] = turn;
          return newRow;
        }
      })
    );

    turn === 1 ? setTurn(2) : setTurn(1);
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>Turn: {turn === 1 ? "X" : "O"}</h2>
      <div className="gameBoard">
        {board.map((row, i) => {
          return row.map((cell, j) => {
            {
              if (cell === 0) {
                cell = "";
              } else if (cell === 1) {
                cell = "X";
              } else if (cell === 2) {
                cell = "O";
              }
              return (
                <div
                  className="cell"
                  key={[i, j]}
                  onClick={() => {
                    if (board[i][j] === 0) {
                      handleClick(i, j);
                    }
                  }}
                >
                  {cell}
                </div>
              );
            }
          });
        })}
      </div>
    </>
  );
}

export default App;
