import React from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const loaderHOC = (WrappedComponent) => {
  return class LoaderHOC extends React.Component {
    isLoaded = () => {
      return this.props.allProjects.length > 0
    }

    render() {
      return (
        <>
          {this.isLoaded ? (
            <WrappedComponent {...this.props} />
          ) : (
            <Container>
              <Row>
                <Col>
                  <h1>Loading</h1>
                </Col>
              </Row>
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
