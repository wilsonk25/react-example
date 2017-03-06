import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

let loginObj = {
  user: '',
  password: ''
}

const usernameOnChange = (e) => {
  loginObj.user = e.target.value
}

const passwordOnChange = (e) => {
  loginObj.password = e.target.value
}

const prepareLoginJSX = (props) => (<div>
    <form onSubmit={props.handleLogin.bind(undefined, loginObj)}>
      <input 
        type='input' 
        placeholder='Email' 
        style={{margin:10,padding:5}}
        name='username'
        onChange={usernameOnChange} />
      <input 
        type='password' 
        placeholder='Password' 
        style={{margin:10,padding:5}}
        name='password'
        onChange={passwordOnChange} />
      <input style={{backgroundColor:'#49B882',color:'#ffffff',borderRadius:50,border:0,width:100,padding:10}}
        type='submit' 
        value={ 'Login' } />
    </form>
    <label>Email: demo@gmail.com &nbsp;&nbsp;&nbsp; Password: demo</label>
  </div>)

export const Header = (props) => {
  let loginFormJSX
  let loginMessageJSX = null

  if(props.session.isNotLoggedIn) {
    if(props.session.loginToken === 'invalid') {
      loginMessageJSX = <p style={{color:'red'}}>Invalid login details, please try with correct user and password</p>
    }

    loginFormJSX = prepareLoginJSX(props)
  } else {
    loginFormJSX = null
  }

  return (
    <div>
      <div style={{backgroundColor:'#eee',padding:10}}>
        <IndexLink to='/' activeClassName={classes.activeRoute}>
          Home
        </IndexLink>
        {' · '}
        <Link to='/welcome' activeClassName={classes.activeRoute}>
          Login
        </Link>
      </div>
      {loginFormJSX}
      {loginMessageJSX}
    </div>
  )
}

export default Header