import { useState, useEffect } from "react"

export default function SearchPlayer() {
    const [players, setPlayers] = useState([]); //store players from API
    const [ searchQuery, setSearchQuery] = useState(""); //store search input
    const foundPlayer = players.find(player => player.name.toLowerCase().includes(searchQuery.toLowerCase()))
    return (
        <>
            <h2>Search for a Player</h2>
            <input type="text" placeholder="Enter player name." value = {searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /> {/**onChange listens for typing in the input field, e.target.value gets the updated text from the input field, setSearchQuery updates the state with the new input */}
        </>

    )
}