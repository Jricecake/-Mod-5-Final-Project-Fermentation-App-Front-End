import React, { Component } from "react";
import AddNote from "./AddNote";
import { createSelector } from "reselect";
import { connect } from "react-redux";

// const [showButton, setShowButton] = useState(false);
class TimelineItem extends Component {
  state = {
    showButton: false,
  };

  generateWarning = () => {
    if (this.props.id > 0 && this.props.id % 3 === 0) {
      return <div>Warning! Check for pressure</div>;
    }
  };

  handleShow = () => {
    this.setState((prevState) => ({
      showButton: !prevState.showButton,
    }));
  };
  render() {
    return (
      <div className="timeline-day">
        {this.generateWarning()}
        <span className="day-display">{`Day ${this.props.day_id}`}</span>
        {this.props.notes
          ? this.props.notes.map((note) => (
              <div>
                {note.text} <button onClick={() => console.log("deleted!")}>X</button>
              </div>
            ))
          : null}
        <button onClick={this.handleShow}></button>
        {this.state.showButton ? (
          <AddNote
            handleShow={this.handleShow}
            project_id={this.props.project_id}
            day_id={this.props.day_id}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {

  return {
    ...state,
    notes: state.notes.notes.filter((note) => note.day_id === props.day_id && note.project_id === props.project_id),
  };
};

export default connect(mapStateToProps)(TimelineItem);
