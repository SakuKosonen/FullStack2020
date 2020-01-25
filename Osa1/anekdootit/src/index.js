import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [lista, setLista] = useState([0, 0, 0, 0, 0, 0])
    const [enitenAania, setEnitenAania] = useState([0, 0])



    const handleClick = () => {

        let x = Math.round(Math.random() * 5)
        setSelected(x)


        console.log(Math.round(Math.random() * 5))



    }

    const handleVoteClick = () => {
        const uusiLista = lista.slice()
        uusiLista[selected]++
        setLista(uusiLista)

       /* if(uusiLista[selected] > enitenAania[1]) {
            const uusiLista2 = enitenAania.slice
            uusiLista2[0] = selected
            uusiLista2[1] = uusiLista[selected]
            setEnitenAania(uusiLista2)
        }*/
        let suurin = 0;
        let suurinKohta = 0;

        for (let i=0; i<=suurin;i++){
            if (uusiLista[i]>suurin) {
                 suurin=uusiLista[i];
                 suurinKohta = i;
            }
        }
        const uusiLista2 = [suurinKohta, suurin]
        setEnitenAania(uusiLista2)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <p>has {lista[selected]} votes </p>

            <button onClick={handleVoteClick}>
                vote
      </button>
            <button onClick={handleClick}>
                next anecdote
      </button>

            <h2>Anecdote with most votes</h2>
            {props.anecdotes[enitenAania[0]]}

            

            <p>has {enitenAania[1]} votes</p>


        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)