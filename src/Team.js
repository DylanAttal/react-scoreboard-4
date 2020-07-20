import React, { useState } from 'react'
import styles from './Team.module.css'

export const Team = (props) => {
  const [teamName, setTeamName] = useState('Gators')
  const [newTeamName, setNewTeamName] = useState('')
  const [teamScore, setTeamScore] = useState(0)

  const handleTeamNameInput = (event) => {
    setNewTeamName(event.target.value)
  }

  const handleTeamNameClick = () => {
    setTeamName(newTeamName)
    setNewTeamName('')
  }

  const handleAddPoint = () => {
    setTeamScore(teamScore + 1)
  }

  const handleSubtractPoint = () => {
    if (teamScore === 0) {
      return
    }

    setTeamScore(teamScore - 1)
  }

  return (
    <div>
      <p className={styles.teamName}>{props.name}</p>
      <p>{props.score}</p>
      <input onChange={handleTeamNameInput} value={newTeamName} />
      <button onClick={handleTeamNameClick}>Update team name</button>
      <div className={styles.pointButtons}>
        <button onClick={handleSubtractPoint}>Subtract one</button>
        <button onClick={handleAddPoint}>Add one</button>
      </div>
    </div>
  )
}
