import React, {Component} from 'react'


export default class Signup extends Component {
  state = {
      error: false,
      validated: false,
      fields: {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    };


  handleChange = (event) => {
    console.log(event.target)
    const newFields = { ...this.state.fields, [event.target.name]: event.target.value };
    this.setState({ fields: newFields})
  }

  render(){
    return(
      <div>
        <form>
          <label>
            Username:
            <input type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
          </label>
          <label>
            First Name:
            <input type='text' name='first_name' onChange={this.handleChange} value={this.state.first_name}/>
          </label>
          <label>
            Last Name:
            <input type='text' name='last_name' onChange={this.handleChange} value={this.state.last_name}/>
          </label>
          <label>
            Email:
            <input type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}