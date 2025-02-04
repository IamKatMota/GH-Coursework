import { useState } from "react";

const API_URL ='https://fsa-jwt-practice.herokuapp.com'
function Authenticate({tokenProp}){
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("")

    async function handleClick(){
        if (!tokenProp){
            console.log("No token")
            setError('Authentication token is missing')
            return;//stop function if token is missing
        }

        try{
            const promise = await fetch(`${API_URL}/authenticate`, {
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenProp}`
                }
            })
            const response = await promise.json()
            setSuccessMessage(response.message)
            setError(null)//resets any error messages prev present
            setUsername(response.data.username)
            console.log('response data:', response)
        }catch(error){
            setError(error.message)
        }

    }
    return(
        <>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>
        }
        {username && <p>Hello {username}!</p>}
        {error && <p className='noAuthenticateTokenError'>{error}</p>}
        <button onClick={handleClick} className={error ? "shake" : ""}>Authenticate Token</button>
        </>
    )
}

export default Authenticate