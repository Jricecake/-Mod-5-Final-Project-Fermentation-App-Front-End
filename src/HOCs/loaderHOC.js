import React from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

const loaderHOC = (WrappedComponent) => {
  return class LoaderHOC extends React.Component {
    // isLoaded = () => {
    //   console.log(this.props)
    //   if (this.props.thisProject.name !== undefined){
    //     return true
    //   } else {
    //     return false
    //   }

    // }

    render() {
      return (
        <>
          {this.props.loaded ? (
            <WrappedComponent {...this.props} />
          ) : (
            <Container>
              <h1>Loading</h1>
            </Container>
          )}
        </>
      );
    }
  };
};
const mapStateToProps = (state) => {
  return {
    loaded: state.user.logged_in,
  };
};

const composedLoaderHOC = compose(connect(mapStateToProps, null), loaderHOC);

export default composedLoaderHOC;
