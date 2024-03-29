import "./App.css";
import Cell from "./components/Cell";
import solveSudoku from "./logic/solver.js";
import { useEffect } from "react";

const puzzle = [
  [0, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 0, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 0, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 0, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 0, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 0, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 0, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 0, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 0],
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Sudoku solver</h3>
        <table>
          <tbody>
            {puzzle.map((row, rowIndex) => {
              return (
                <tr
                  key={rowIndex}
                  className={(rowIndex + 1) % 3 === 0 ? "horizontalBorder" : ""}
                >
                  {row.map((col, colIndex) => {
                    return (
                      <td
                        key={rowIndex + colIndex}
                        className={
                          (colIndex + 1) % 3 === 0 ? "verticalBorder" : ""
                        }
                      >
                        <Cell value={puzzle[rowIndex][colIndex]} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
