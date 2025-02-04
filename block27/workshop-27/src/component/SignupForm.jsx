import { useState } from "react"

const API_URL = 'https://fsa-jwt-practice.herokuapp.com/signup'


function SignUpForm({ setTokenProp }) {
    const [formData, setFormData] = useState({ username: '', password: '', error: null })
    const [errors, setErrors] = useState({})

    async function handleSubmit(e) {
        e.preventDefault()
        let validationErrors = {};  // ✅ Temporary object to collect errors

        // ✅ Validate Username
        if (!formData.username) {
            validationErrors.username = "Username is required";
        } else if (formData.username.length < 4) {
            validationErrors.username = "Username must be at least 4 characters long.";
        }

        // ✅ Validate Password
        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 5) {
            validationErrors.password = "Password must be greater than 5 characters long.";
        }

        // ✅ Stop form submission if validation fails, Object.keys gets all the fields that have errors from the validationErrors object
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;//stops the form submission
        }

        // ✅ Clear previous errors if validation passes
        setErrors({});

        try {
            const promise = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, //tells API we're sending json data
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password
                }) //converts object to json format

            })

            const response = await promise.json()
            console.log(response)

            setTokenProp(response.token)


        } catch (error) {
            setFormData.error((prevData) => ({ ...prevData, error: error.message }))
        }

    }
    return (
        <>
            <h2>Sign Up</h2>
            {
                formData.error && <p>{formData.error}</p>
            }
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <input type="text" value={formData.username} onChange={(e) => setFormData((prevData) => ({ ...prevData, username: e.target.value }))} />

                    {errors.username && (<span className='error-message'>{errors.username}</span>)}
                </label>

                <label htmlFor="password">
                    Password:
                    <input type="password" value={formData.password} onChange={(e) => setFormData((prevData) => ({ ...prevData, password: e.target.value }))} />

                    {errors.password && (<span className='error-message'>{errors.password}</span>)}
                </label>

                <button className={Object.keys(errors).length > 0 ? "shake" : ""}>Submit</button>
            </form>
        </>
    )
}

export default SignUpForm