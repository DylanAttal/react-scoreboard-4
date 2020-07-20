import React from 'react'
import './App.css'
import { Header } from './Header'
import { Team } from './Team'

export function App() {
  const listOfTeams = [
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
  ]

  return (
    <div className='App'>
      <Header />
      {listOfTeams.map((team, index) => {
        return (
          <Team name={team.teamName} score={team.teamScore} index={index} />
        )
      })}
    </div>
  )
}
