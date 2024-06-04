import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onNameChange }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    if (playerName.trim() === "") {
      setPlayerName(initialName);
    }
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  let updatedName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    updatedName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {updatedName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
