import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td><td>{props.value}</td></tr>
    )
}

const Statistics = (props) => {

    if (props.all > 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                        <StatisticLine text="good" value={props.good} />
                        <StatisticLine text="neutral" value={props.neutral} />
                        <StatisticLine text="bad" value={props.bad} />
                        <StatisticLine text="all" value={props.all} />
                        <StatisticLine text="average" value={(props.good * 1 + props.bad * -1) / props.all} />
                        <StatisticLine text="positive" value={(props.good / props.all) * 100 + "%"} />
                    </tbody>
                </table>

            </div>
        )
    }

    return (
        <div>
            <h2>Statistics</h2>
            <p>No feedback given</p>
        </div>
    )
}


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)



    const handleGoodClick = () => {
        setGood(good + 1)
        setAll(all + 1)


    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)

    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setAll(all + 1)

    }

    return (
        <div>
            <h1>give feedback</h1>

            <button onClick={handleGoodClick}>
                good
      </button>
            <button onClick={handleNeutralClick} >
                neutral
      </button>
            <button onClick={handleBadClick}  >
                bad
      </button>

            <Statistics good={good} neutral={neutral} bad={bad} all={all} />



        </div>


    )
}


ReactDOM.render(<App />,
    document.getElementById('root')
)
