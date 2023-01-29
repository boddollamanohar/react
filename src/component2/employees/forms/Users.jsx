import React, { Component } from 'react'

 class Users extends Component {
    state={
        User:"", 
        password:""
    }
    EmailHander=(event) => {
        console.log("true ")
this.setState({User:event.target.value})
    }
    PasswordHander=(event) => {
        console.log("yesss ")
this.setState({password:event.target.value})
    }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>

        <form className='form group' >
            <div className="container" mt-10>
                <div className="row">
                    <div className="col-8">
                        <h1> Users Details </h1>
                    <div className='form control'><input type="text" placeholder='user name' onChange={this.EmailHander} name="User"/></div> <br />
                    <div><input type="text" placeholder='password'onChange={this.PasswordHander}/></div> <br />
                    <button input="submit" value="login">login</button>
                    </div>
                </div>
            </div>
        </form>


      </div>

    )
  }
}

export default Users