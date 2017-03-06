import React from 'react'
import classes from './Welcome.scss'

export const Welcome = (props) => {

  return (
  <div>
      <h2 className={classes.welcomeContainer}>
        Welcome Page
      </h2>
      <a href="/" style={{backgroundColor:'#49B882',color:'#ffffff',borderRadius:50,border:0,width:100,padding:10}}>Logout</a>
  </div>
)}

Welcome.propTypes = {
  welcome: React.PropTypes.object.isRequired
}

export default Welcome