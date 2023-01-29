import React, { Component } from 'react'
import employees from './Data'

 class Employee extends Component {
  render() {
    return (
      <div>
        <h1>Employee Component</h1>
        <pre>{JSON.stringify(employees)}</pre>
                   <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>gender</td>
                        </tr>
                        <tbody>
                            {
                         employees.map((emp) => {
                                    return <tr key={emp.id}>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                       <td>{emp.gender}</td>
                                    </tr>
                                })
                            }
                        </tbody>

                        
                    </thead>
                   </table>

      </div>
    )
  }
}

export default Employee