import React, {useState} from 'react'

function Character({data}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not

  const [showHomeworld, setShowHomeworld] = useState(false);
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div className ="character-card" onClick={toggleHomeworld}>
      <h3 className = "character-name">{data.name}</h3>
      <p>ID: {data.id}</p>
      <p>Date of Birth: {data.birth_year}</p>
      {showHomeworld && <p>Planet: <span className='character-planet'>{data.homeworld.name}</span> </p>}
    </div>
  );
}

export default Character
