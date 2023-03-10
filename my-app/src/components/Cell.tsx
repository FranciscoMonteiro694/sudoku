type CellProps = {
  value: number;
};

function Cell({ value }: CellProps) {
  return <input className="cell" value={value}></input>;
}

export default Cell;
