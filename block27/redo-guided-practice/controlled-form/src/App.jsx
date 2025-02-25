import { useState, useEffect } from 'react'
import './App.css'

function App() {
  //Instead of using separate state variables for each field, it uses one state object to track changes to the entire form.
  const [formData, setFormData] = useState({ username: "", password: "" });

  useEffect(() => {
    console.log(formData)
  }, [formData])

  //e.target refers to the input field that triggered the change
  //e.target.name -> the name of the input field("username" or "password")
  //e.target.value -> the new value typed into the field
  //prevData represents the previous state, ...prevData spreads the existing form data to keep all previous values
  //[name]:value dynamically updates only the field that changed (Dynamically updating state means modifying it in real-time based on user actions instead of hardcoding.)
  function handleChange(e) {
    //{} because we are destructuring the object and extracting its properties into seperate variables
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      //name is in [] because it allows name to be dynamically updated instead of hardcoding the property name to "name" not its value of username or password, named "name" because its linked to the key in input 
      [name]: value
    }))
  }


  function handleSubmit() {

  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            <input type="text" name='username' value={formData.username} onChange={handleChange} />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name='password' value={formData.password} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
