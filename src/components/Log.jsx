const Log = ({ turns }) => {
  return (
    <ol id="log">
      <h2>Game History:</h2>
      {turns.map((turn) => (
        <li key={`${turn.square.row},${turn.square.col}`}>
          {turn.player} placed {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
