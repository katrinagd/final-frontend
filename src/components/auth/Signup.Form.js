import React from 'react'
import { withRouter } from 'react-router'


class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ 
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
      .then(() => this.props.history.push('/users'))
  }

  render () {
    return (
      <main className='container'>
      <section className='row justify-content-md-center'>
        <div className='col col-lg-5'>
          <h1>Signup</h1>
          <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <div className='form-group col-md-6'>
                <label htmlFor='email'>Email Address</label>
                  <input
                    className='form-control validate_input'
                    id='email'
                    onChange={this.handleChange}
                    name='email'
                    type='text'
                    value={this.state.email}
                    required
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
                required
              />
            </div>
            </div>
            <div className='form-row'>
            <div className='form-group col-md-6'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  className='form-control'
                  id='firstName'
                  onChange={this.handleChange}
                  name='first_name'
                  type='text'
                  value={this.state.firstName}
                  required
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  className='form-control'
                  id='lastName'
                  onChange={this.handleChange}
                  name='last_name'
                  type='text'
                  value={this.state.lastName}
                  required
                />
                
              </div> 
              </div>

            <button type='submit' className='btn btn-info'>Submit</button>
        </form>
        </div>
    </section>
  </main>
    )
  }
}

export default withRouter(Form)
