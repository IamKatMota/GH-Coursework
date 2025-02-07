import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Get playerId from URL
import { Link } from "react-router-dom"; // Import Link to navigate

const cohortName = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function SinglePlayer() {
    const { id } = useParams(); // Get player ID from URL
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!id){
            setError("Invalid player ID");
            return //stopsfunction if playerId is missing
        }
        async function fetchSinglePlayer() {
            try {
                const response = await fetch(`${API_URL}/players/${id}`);
                const data = await response.json();
                
                if (!data.success) {
                    throw new Error(`Failed to fetch player #${id}`);
                }

                setPlayer(data.data.player);
            } catch (err) {
                console.error(`Oh no, trouble fetching player #${id}!`, err);
                setError(err.message);
            }
        }

        fetchSinglePlayer();
    }, [id]); // Runs when playerId changes

    // Handle error states before rendering
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!player) return <p>No player found.</p>;

    // caanot be decalred outside since player is null and will get undefeined
    const teamName =
        player.teamId === 1797 ? "Ruff" :
        player.teamId === 1798 ? "Fluff" :
        "Unassigned";

    return (
        <div>
            <img src={player.imageUrl} alt={player.name} className="player-image" />
            <h3>Name: {player.name}</h3>
            <h4>ID: {player.id}</h4>
            <h4>Breed: {player.breed}</h4>
            <h4>Status: {player.status}</h4>
            <h4>Team: {teamName}</h4>
            <Link to={"/"}>
                <button>Back</button>
            </Link>
        </div>
    );
}