import "./App.css";
import Cell from "./components/Cell";

const puzzle = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
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
                <tr key={rowIndex}>
                  {row.map((col, colIndex) => {
                    return (
                      <td key={rowIndex + colIndex}>
                        <Cell/>
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
