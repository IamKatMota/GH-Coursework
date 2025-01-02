import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";
import "./index.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const [activeHeartId, setActiveHeartId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => (
          <div className="container" key={puppy.id}>
            <div className="containerBackground">
              <p
                onClick={() => {
                  setFeatPupId(puppy.id);

                  // Show the heart next to the clicked name
                  setActiveHeartId(puppy.id);

                  // Clear the heart after animation
                  setTimeout(() => {
                    setActiveHeartId(null);
                  }, 4000); // Match animation duration
                }}
              >
                {puppy.name}

                {/* Heart appears next to the clicked name */}
                {activeHeartId === puppy.id && (
                  <span className="popping-heart">♥</span>
                )}
              </p>
            </div>
          </div>
        ))}

        {featPupId && (
          <div className="container2">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;