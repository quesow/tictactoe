export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[b] && squares[c] && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
      return squares[a].value;
    }
  }
  return null;
}

export function notCurrentAnyMore(squares) {
  for (let i = 0; i < squares.length; i++) {
    if(squares[i]){
      squares[i].current = false
    }
  }
  return squares
}
