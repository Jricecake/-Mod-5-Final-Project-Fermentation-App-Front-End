import React from 'react'
import { Redirect} from 'react-router-dom'

const AuthHOC = wrappedComponent => {

  return class AuthHOC extends React.Component {


    isAuthorized = () => {


    }


    render() {
      return (<>(this.isAuthorized()?<WrappedComponent {...this.props}/>:<Redirect to="/"/>)</>)
    }
  }

}