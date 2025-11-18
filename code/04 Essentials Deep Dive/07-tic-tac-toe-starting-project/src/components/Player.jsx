import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // re-execute the Player function again
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      {/* My Solution */}
      {/* {!isEditing ? <span className="player-name">{name}</span> : <input />} */}
      {playerName}
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
