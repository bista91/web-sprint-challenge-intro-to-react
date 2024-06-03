import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  // Create effects to fetch the data and put it in state
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      
        const [peopleResponse, planetsResponse] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets),
        ]);
        
       let character = peopleResponse.data.map(char => {
        return{...char, homeworld: planetsResponse.data.find(world => world.id == char.homeworld)}
       })
       setData(character)
    };
    fetchData();
  }, []);
  

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      
          {data.map((character) => (
            <Character 
              key={character.id} 
              data = {character} 
            />
          ))}
    
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
