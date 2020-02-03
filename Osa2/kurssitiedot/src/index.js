import React from 'react'
import ReactDOM from 'react-dom'

const reducer = (accumulator, currentValue) => accumulator + currentValue

// <Total parts={props.course.parts} />
const App = () => {



    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    return (
        <div>
            <h1>Web development curriculum</h1>
            
                {courses.map((jotain, i) =>
                    <div key={i}>
                        <Course course = {courses[i]} />
                    </div>
                )}
            

           
        </div>
    )
}







const Course = (props) => {

    return (
        <div>
            <Header course={props.course.name} />


            <Content parts={props.course.parts} />

            <Total parts={props.course.parts} />


        </div>
    )
}

const Header = (props) => {


    return (
        <div>
            <h2>{props.course}</h2>
        </div>
    )
}

const Part = (props) => {

    return (
        <p> {props.name} {props.exercises} </p>

    )
}



const Content = (props) => {
    let jotain = props.parts.length
    console.log(props.parts.length)
    let uusiLista = []


    for (let i = 0; i <= jotain - 1; i++) {

        uusiLista.push([props.parts[i].name, props.parts[i].exercises, props.parts[i].id])
    }
    console.log({ uusiLista })
    return (

        <div>


            
                {uusiLista.map(note =>
                    <div key={note[2]}>
                        <Part name={note[0]} exercises={note[1]} />
                    </div>
                )}
            





        </div>
    )
}



const Total = (props) => {

    const arr = []

    for (let i = 0; i <= props.parts.length - 1; i++) {
        arr.push(props.parts[i].exercises)
    }

    return (
        <div>

            <p> <b>Total of {arr.reduce(reducer)} exercises </b></p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
