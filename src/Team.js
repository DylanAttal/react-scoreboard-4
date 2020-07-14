import React, { useState } from 'react'
import styles from './Team.module.css'

export const Team = (props) => {
  const [teamName, setTeamName] = useState('Gators')

  let newTeamName = ''

  const handleTeamNameInput = (event) => {
    newTeamName = event.target.value
  }

  const handleTeamNameClick = () => {
    setTeamName(newTeamName)
  }

  return (
    <div>
      <p className={styles.teamName}>{teamName}</p>
      <p>Team Score</p>
      <input onChange={handleTeamNameInput} />
      <button onClick={handleTeamNameClick}>Update team name</button>
      <div className={styles.pointButtons}>
        <button>Subtract one</button>
        <button>Add one</button>
      </div>
    </div>
  )
}
