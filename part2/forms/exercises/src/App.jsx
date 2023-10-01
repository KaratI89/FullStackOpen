import { useState } from "react"
import { Person } from "./components/Name"

const Filter = (props) => {
  return (
    <div>
    filter shown with:
    <input
      value={props.filter}
      onChange={props.handleFilterChange}
    />
  </div>
  )
}

const PersonForm = (props) => {
  return(
    <form onSubmit={props.addPerson}>
    <div>
      name:
      <input
        value={props.newName}
        onChange={props.handleNameChange} 
      />
    </div>
    <div>
      number:
      <input
        value={props.newNumber}
        onChange={props.handleNumberChange}
      />
    </div>
    <div>
      <button type='submit'>add</button>
    </div>
  </form>

  )
}

export const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '39-44-5323523'
    }
  ])
  const [newName, setNewName] = useState('enter a new name')
  const [newNumber, setNewNumber] = useState('enter a number')
  const [filter, setFilter] = useState('')

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
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add new adreses</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )}

export default App