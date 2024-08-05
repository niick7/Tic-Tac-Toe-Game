import { useState } from "react";

export default function Player({name, symbol = "X", isActive, onChangeName}) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !isEditing);
    if(isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnName = 'Edit';
  if(isEditing) {
    editablePlayerName = <input required value={playerName} onChange={handleChangeName} />
    btnName = 'Save';
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnName}</button>
    </li>
  );
}