import { useState, useEffect } from "react"
import { Person } from "./components/Name"
import { Filter } from "./components/Filter"
import { PersonForm } from "./components/PersonForm"
import phonebookService from "./services/person"

export const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('enter a new name')
  const [newNumber, setNewNumber] = useState('enter a number')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    phonebookService
      .getFromServer()
      .then(phonebookInit => {
        setPeople(phonebookInit)
      })
  },[])
  
  const addPerson = (event) => {
    event.preventDefault()
    let numb = people.map(person => person.name).indexOf(newName)
    console.log(numb);
    if (numb === -1 && !newName == "" && !newNumber == "") {
      phonebookService
      .create({name: newName, number: newNumber})
      .then(returnedPerson => setPeople(people.concat(returnedPerson)))
    }
    else if (numb !== -1 && newNumber !== people.find(person=>person.name === newName).number){
      const changePerson = people.find(person=>person.name === newName)
      if (window.confirm(`Do you really want to change ${changePerson.name}`)){
        const changedObject = {...changePerson, number: newNumber}
        console.log(changedObject);
        phonebookService
          .personChange(changePerson.id, changedObject)
          .then(changedObject=>setPeople(people.map(person=>person.id !== changePerson.id ? person : changedObject )))
      }
    }
    else{
      window.alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
    console.log('this is the form', event.target)
  }

  const deletePerson = (id) => {
    if (window.confirm(`Do you realy want to dalate ${people.find(person=>person.id === id).name}`)){
    phonebookService.personDelete(id).then(response=>{setPeople(people.filter(n=>n.id !== id))})
    }
  }

  const change = (id) => {
    setNewName(people.find(person=>person.id === id).name)
    setNewNumber(people.find(person=>person.id === id).number)
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

  const filteredPeople = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

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
        {filteredPeople.map((person) => <Person key={person.name} person={person} deleteFunction={deletePerson} changeFunction={change} />)} 
      </ul>
    </div>
  )}
export default App