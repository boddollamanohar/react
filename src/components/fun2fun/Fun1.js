import React from 'react'
import Fun2 from './Fun2'

const Fun1 = () => {
    let employeename='Manohar'
    let email='bmanohar1432@gmail.com'
    let role=' front  end developer'
  return (
    <div>
        <h1> Fun1 component 1</h1>
        <Fun2 name={employeename} email={email} role={role}/>
    </div>
  )
}

export default Fun1