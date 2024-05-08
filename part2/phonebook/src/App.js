import { useState } from 'react';

const Filter = ({ filterName, handleFilterNameChange }) => (
  <div>
    filter shown with
    <input value={filterName} onChange={handleFilterNameChange} />
  </div>
);

const PersonForm = ({ newName, newNumber, handleNewNameChange, handleNewNumberChange, addPerson }) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNewNameChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNewNumberChange} />
    </div>
    <div>
      <button type='submit'>add</button>
    </div>
  </form>
);

const Persons = ({ persons, filterName }) => {
  const personsToShow = persons.filter((person) => !filterName || person.name.includes(filterName));
  return personsToShow.map((person) => (
    <div key={person.name}>
      {person.name} {person.number}
    </div>
  ));
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');
  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handleNewNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterNameChange = (event) => setFilterName(event.target.value);
  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterNameChange={handleFilterNameChange} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;
