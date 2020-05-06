import React from 'react'
import { Redirect} from 'react-router-dom'
import { compose } from 'redux';
import { connect } from 'react-redux';

const loaderHOC = WrappedComponent => {

  return class LoaderHOC extends React.Component {


    isLoaded = () => {
      console.log(this.props)
      if (this.props.allProjects > 0){
        return true
      } else {
        return false
      }

    }


    render() {
      return (<>
      { this.isLoaded() ? < WrappedComponent {...this.props}/> : <h1>Loading</h1>}
      </>)
    }
  }

}
// const mapStateToProps = state => {
//   return {
//       token: state.user.token
//   }
// }

// const composedLoaderHOC = compose(
//   connect(mapStateToProps, null),
//   loaderHOC
// )

export default loaderHOC;