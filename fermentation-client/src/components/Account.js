import React from 'react'
import composedAuthHOC from '../HOCs/authHOC'
import { connect } from 'react-redux'

const Account = (props) => {
  return(
    <div className='account-page'>
     Nice Account, you!
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.user.logged_in,
    user: state.user.currentUser.user,
  };
};

export default composedAuthHOC(connect(mapStateToProps)(Account))
