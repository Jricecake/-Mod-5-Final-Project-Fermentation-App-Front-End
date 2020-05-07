import React from 'react'
import composedAuthHOC from '../HOCs/authHOC'
import { connect } from 'react-redux'

const Account = (props) => {
  return(
    <div className='account-page'>
      {`Hey there, ${props.user.first_name}! Your username, ${props.user.username}, is really cool!`}
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser.user,
  };
};

export default composedAuthHOC(connect(mapStateToProps)(Account))
