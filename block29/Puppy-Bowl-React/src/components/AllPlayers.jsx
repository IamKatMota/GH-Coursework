import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link to navigate
import NewPlayerForm from "./NewPlayerForm";

const cohortName = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`

export default function AllPlayers() {
    const [players, setPlayers] = useState([]) //stores players from API

    //useEffect so we dont fetch players on every rerender
        async function fetchAllPlayers() {
            try {
                const promise = await fetch(`${API_URL}/players`);
                const response = await promise.json()
                if (!response.success) {
                    throw response.error;
                }
                setPlayers(response.data.players);
                console.log('fetched players:', response.data.players)
            } catch (err) {
                console.error("Uh oh, trouble fetching players!", err);
            }
        };
        fetchAllPlayers();
    


    return (
        <>
            <h1>Puppy Bowl</h1>
            {/**passing down fetchAllPlayers as a prop to newplayerform so it can run it to rerender the players after a new one has been added instead of having to manually refresh */}
            <NewPlayerForm onPlayerAdded={fetchAllPlayers}/>
            {/**Display player cards by looping through array of players */}
            {players.length > 0 ? (
                players.map((player) => (
                    <div key={player.id} className="playerCard">
                        <h3>{player.name}</h3>
                        {/**if images are missing, wont try to render them */}
                        {player.imageUrl && <img src={player.imageUrl} alt={player.name} />}
                        <div>ID: {player.id}</div>
                        {/*  Use Link to navigate to SinglePlayer */}
                        <Link to={`/players/${player.id}`}>
                            <button>🔍</button>
                        </Link>
                        <button>❌</button>
                        

                    </div>
                ))
            ) : (
                <p>No players found!</p>
            )}

        </>

    )
}