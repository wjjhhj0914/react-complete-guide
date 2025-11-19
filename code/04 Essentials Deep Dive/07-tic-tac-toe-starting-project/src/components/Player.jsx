import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // If you're updating your state based on a previous state value, you should USE this function from here of the state updating function
    setIsEditing(editing => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    // btnCaption = 'Save';
  }

  return (
    <li>
      {playerName}
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
