import React from 'react'
import { withRouter } from 'react-router'
// import * as EmailValidator from 'email-validator'

class Form extends React.Component {
  constructor (props) {
    super(props)
    // this.errorFocus = React.createRef();

    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      errors: []
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleError = this.handleError.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ 
      [name]: value,
      error: false,
      errors: []
    })
  }

  // handleError({ target: { name, value } }) {
  //   if (name === 'first_name') {
  //     if (!value) {
  //       this.setState({ first_nameError: 'Error: First name is required' })
  //     } else {
  //       this.setState({ first_nameError: '' })
  //       delete this.state.first_nameError;
  //     }
  //   }
  //   if (name === 'last_name') {
  //     if (!value) {
  //       this.setState({ last_nameError: 'Error: Last name is required' })
  //     } else {
  //       this.setState({ last_nameError: '' })
  //       delete this.state.last_nameError;
  //     }
  //   }
  //   if (name === 'email') {
  //     const validEmail = EmailValidator.validate(this.state.email)
  //     if (!value) {
  //       this.setState({ emailError: 'Error: Email address is required' })
  //     } else if (!validEmail) {
  //       this.setState({ emailError: 'Error: You must enter a valid email address' })
  //     } else {
  //       this.setState({ emailError: '' })
  //       delete this.state.emailError;
  //     }
  //   }
  //   if (name === 'password') {
  //     const validPassword = this.state.password.length >= 8
  //     if (!value) {
  //       this.setState({ passwordError: 'Error: Password is required' })
  //     } else if (!validPassword) {
  //       this.setState({ passwordError: 'Error: Your password must be at least 8 characters' })
  //     } else {
  //       this.setState({ passwordError: '' })
  //       delete this.state.passwordError;
  //     }
  //   }
  //   if (!this.state.first_nameError && !this.state.last_nameError && !this.state.passwordError && !this.state.emailError) {
  //     this.setState({ formError: '' })
  //     delete this.state.formError;
  //   }
        
  // }


  handleSubmit(e) {
    e.preventDefault()
    let myErrors = []
    const emailRegex = /\w+@\w+\.\w+/
    if (!this.state.email || this.state.email === '') {
      myErrors.push('Email is required!')
    } else if (!emailRegex.test(this.state.email)) {
      myErrors.push('Please enter a valid email address!')
    }
    if(!this.state.password || this.state.password === ''){
      myErrors.push('Password is required')
    }else if(this.state.password.length < 8){
      myErrors.push('Password must be at least 8 characters!')
    }
    if(!this.props.isLogin && (!this.state.first_name || this.state.first_name === '')){
      myErrors.push('First Name is Required!')
    }
    if(!this.props.isLogin && (!this.state.last_name || this.state.last_name === '')){
      myErrors.push('Last Name is Required!')
    }
    if (myErrors.length === 0) {
      this.props.onSubmit(this.state)
      this.props.history.push('/users')
    } else {
      this.setState({errors: myErrors})
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className='form-row'>
        <div className='form-group col-md-6'>
            <label htmlFor='email'>Email Address</label>
              <input
                className='form-control validate_input'
                id='email'
                onChange={this.handleChange}
                // onBlur={this.handleError}
                name='email'
                type='text'
                value={this.state.email}
                // required
          />
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-control'
            id='password'
            onChange={this.handleChange}
            name='password'
            type='password'
            value={this.state.password}
            // required
          />
        </div>
        </div>
        {!this.props.isLogin &&
        <div className='form-row'>
        <div className='form-group col-md-6'>
            <label htmlFor='firstName'>First Name</label>
            <input
              className='form-control'
              id='firstName'
              onChange={this.handleChange}
              // onBlur={this.handleError}
              name='first_name'
              type='text'
              value={this.state.firstName}
              // required
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              className='form-control'
              id='lastName'
              onChange={this.handleChange}
              // onBlur={this.handleError}
              name='last_name'
              type='text'
              value={this.state.lastName}
              // required
            />
            
          </div> 
          </div>
        }
        <button type='submit' className='btn btn-info'>Submit</button>
        {this.state.errors.length > 0 &&
          <div className='alert alert-danger'>
            {this.state.errors.map(txt => <p>{txt}</p>)}
          </div>
        }
        </form>
    )
  }
}

export default withRouter(Form)
