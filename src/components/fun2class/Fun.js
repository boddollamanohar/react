import React from 'react'
import Class from './Class'

const Fun = () => {
    let name='Manohar'
    let loc='bangalore'
    let role ='Manger'
  return (
    <div>
    <h1>function component</h1>
        <Class name={name} loc={loc} role={role}/>
    </div>
  )
}

export default Fun