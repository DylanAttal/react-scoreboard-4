import React from 'react'
import styles from './Team.module.css'

export const Team = (props) => {
  return (
    <div>
      <p className={styles.teamName}>Team Name</p>
      <p>Team Score</p>
      <input />
      <button>Update team name</button>
      <div className={styles.pointButtons}>
        <button>Subtract one</button>
        <button>Add one</button>
      </div>
    </div>
  )
}
