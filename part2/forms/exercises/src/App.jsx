import { useState } from "react"
import { Person } from "./components/Name"

export const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '39-44-5323523'
    }
  ])
  const [newName, setNewName] = useState('enter a new name')
  const [newNumber, setNewNumber] = useState('enter a number')
  const [filter, setFilter] = useState('enter a name')

  const addPerson = (event) => {
    event.preventDefault()
    let numb = persons.map(person => person.name).indexOf(newName)
    console.log(numb);
    if (numb === -1) {
      setPersons(persons.concat({ name: newName, number: newNumber})) 
    }
    else{
      window.alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
    console.log('this is the form', event.target)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:
        <input
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <h3>Add new adreses</h3>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange} 
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )}

export default App