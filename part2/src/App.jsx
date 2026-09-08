import { useState } from 'react'

const Person = ({person}) => {
  return <li>{person.name} {person.number}</li>
}

const Filter = ({newSearch, handleSearchChange}) => (
  <div>
    filter shown whith<input value={newSearch} onChange={handleSearchChange}/>
  </div>
)

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => (
  <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
  </form>
)

const Persons = ({personsToShow}) => (
  <ul>
    {personsToShow.map(person => 
    <Person key={person.id} person={person}/>)}
  </ul>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newSearch, SetSearch] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some(
      person => person.name.toLowerCase() === newName.trim().toLowerCase()
    )

    const numberExists = persons.some(
      person => person.number === newNumber.trim()
    )

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    else if(numberExists) {
      alert(`Number ${newNumber} is already in use`)
      return
    }

    const personObject= {
      name: newName.trim(),
      number: newNumber.trim(),
      id: String(persons.length + 1)
    } 

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    SetSearch(event.target.value)
  }

  const personsToShow = newSearch.trim() === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase() === newSearch.toLowerCase().trim())

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange}/>

      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App