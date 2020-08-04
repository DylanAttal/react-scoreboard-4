import React, { useState } from 'react'
import styles from './Team.module.css'

export const Team = (props) => {
  const [newTeamName, setNewTeamName] = useState('')

  const handleTeamNameInput = (event) => {
    setNewTeamName(event.target.value)
  }

  const handleTeamNameClick = () => {
    props.updateTeamName(newTeamName, props.index)
  }

  const handleAddPoint = () => {
    props.updateTeamScore(props.score + 1, props.index)
  }

  const handleSubtractPoint = () => {
    if (props.score === 0) {
      return
    }

    props.updateTeamScore(props.score - 1, props.index)
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
