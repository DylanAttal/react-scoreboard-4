import React, { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Team } from './Team'

export function App() {
  const [listOfTeams, setListOfTeams] = useState([
    {
      teamName: 'Gators',
      teamScore: 0,
    },
    {
      teamName: 'Seminoles',
      teamScore: 0,
    },
    {
      teamName: 'Dolphins',
      teamScore: 0,
    },
    {
      teamName: 'Bears',
      teamScore: 0,
    },
  ])

  const updateTeamName = (newName, index) => {
    const updatedListOfTeams = [...listOfTeams]
    updatedListOfTeams[index].teamName = newName
    setListOfTeams(updatedListOfTeams)
  }

  const updateTeamScore = (newScore, index) => {
    const updatedListOfTeams = [...listOfTeams]
    updatedListOfTeams[index].teamScore = newScore
    setListOfTeams(updatedListOfTeams)
  }

  return (
    <div className='App'>
      <Header />
      {listOfTeams.map((team, index) => {
        return (
          <Team
            name={team.teamName}
            score={team.teamScore}
            index={index}
            key={index}
            updateTeamName={updateTeamName}
            updateTeamScore={updateTeamScore}
          />
        )
      })}
    </div>
  )
}
