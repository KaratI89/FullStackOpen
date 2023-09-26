import { useState } from "react"
import { Name } from "./components/Name"

export const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('enter a name')

  const addPerson = (event) => {
    event.preventDefault()
    setPersons(persons.concat({ name: newName }))
    setNewName('')
    console.log('this is the form', event.target)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value)
  }

  return (

    <div>
      debug:{newName}
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((name) => <Name key={name.name} name={name} />
        )}
      </ul>
    </div>
  )}

export default App