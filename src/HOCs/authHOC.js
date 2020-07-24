import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

const AuthHOC = (WrappedComponent, ) => {
    return class AuthHOC extends React.Component {
        isAuthorized = () => {
            if (this.props.logged_in) {
                return true
            } else {
                return false
            }
        }
        render() {
            return (
                <> 
                    { this.isAuthorized()
                    ? <WrappedComponent {...this.props} />
                    :<h1>Loading!</h1>}
                </>
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        logged_in: state.user.logged_in
    }
}
const composedAuthHOC = compose(
  connect(mapStateToProps, null),
  AuthHOC
)
export default composedAuthHOC;