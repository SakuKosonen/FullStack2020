import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  //const [joni, setJoni] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [notErrorMessage, setNotErrorMessage] = useState(null)

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])

  const addNumero = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    let ihanko = 0
    const uusiLista = persons.slice()
    let jotai = { name: newName, number: newNumber }
    persons.forEach(function (item, index, array) {
      //console.log(item, index)
      if (item.name === newName) {
        ihanko = 1
      }
    })
    if (ihanko === 1) {
      //window.alert(newName + ' is already added tho phonebook')
      ihanko = 0

      setErrorMessage(
        newName + ' is already added to phonebook'

      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

    } else {
      //uusiLista.push(jotai)
      //setPersons(uusiLista)

      personService

        .create(jotai)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')

          /*.getAll()
          .then(initialPersons => {
            setPersons(initialPersons)*/

          /*.create(jotai)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNumber('')*/
        })


      ihanko = 0
      setNotErrorMessage(
        newName + ' added'

      )
      setTimeout(() => {
        setNotErrorMessage(null)
      }, 5000)

    }




  }

  const poisto = (id, name) => {



    /* persons.forEach(function (item, index, array) {
       console.log(item)
       console.log(id)
 
       if(id === item.id){
         console.log('Hei')
 
         setJoni(item.name)
       }
 
     })*/



    if (window.confirm('Delete ' + name + ' ?')) {


      personService
        .remove(id).then(() => {

          personService
            .getAll()
            .then(initialPersons => {
              setPersons(initialPersons)
            })

        })

        setNotErrorMessage(
          name + ' deleted'
  
        )
        setTimeout(() => {
          setNotErrorMessage(null)
        }, 5000)


    }
  }

  const handleChange = (event) => {

    console.log(event.target.value)
    setNewName(event.target.value)

    // window.alert(newName + ' is already added tho phonebook')

  }

  const handleNumberChange = (event) => {

    console.log(event.target.value)
    setNewNumber(event.target.value)

    // window.alert(newName + ' is already added tho phonebook')

  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={errorMessage} />
      <Notification2 message={notErrorMessage} />

      <Filter handleFilterChange={handleFilterChange} filter={filter} />


      <h2>add a new</h2>

      <PersonForm addNumero={addNumero} newName={newName} handleChange={handleChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons poisto={poisto} persons={persons} filter={filter} />


    </div>
  )

}

const Filter = (props) => {
  return (
    <form>
      <div>
        filter shown with <input
          value={props.filter}
          onChange={props.handleFilterChange}

        />
      </div>
    </form>
  )
}

const PersonForm = (props) => {
  return (

    <form onSubmit={props.addNumero}>
      <div>
        name: <input
          value={props.newName}
          onChange={props.handleChange}
        />
      </div>
      <div>
        number: <input
          value={props.newNumber}
          onChange={props.handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = (props) => {



  console.log(props.persons);
  return (
    <> {
      props.persons
        .filter((jokin) => jokin.name.indexOf(props.filter) !== -1)

        .map((jotain, i) =>
          <div key={i}>
            <p> {jotain.name} {jotain.number}
              <button onClick={() => props.poisto(jotain.id, jotain.name)}>delete</button>

            </p>
          </div>
        )

    }
    </>
  )
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const Notification2 = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="notError">
      {message}
    </div>
  )
}

export default App