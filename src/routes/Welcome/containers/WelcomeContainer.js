import React from 'react'
import { connect } from 'react-redux'
import Welcome from 'components/Welcome'

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  welcome: state.welcome,
  session: state.session
})


class WelcomeContainer extends React.Component {
  constructor(props) {
    super(props)
  
  }

  componentDidMount() {
   
  }

  render () {
    if(this.props.session.isNotLoggedIn) {
      return <h4>Please login in order to access your welcome</h4>
    }

    return (
        <Welcome {...this.props} 
          
          onSubmit={this.onSubmit} />
    );
  }
}

export default connect(mapStateToProps, mapActionCreators)(WelcomeContainer)