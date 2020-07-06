import React, { Component } from "react";
import AddNote from "./AddNote";
import { connect } from "react-redux";

// const [showButton, setShowButton] = useState(false);
class TimelineItem extends Component {
  state = {
    showButton: false,
  };

  generateWarning = () => {
    if (this.props.day_id > 0 && this.props.day_id % 3 === 0) {
      return <span className='day-warning'>Warning! Check for pressure</span>;
    }
  };

  handleShow = () => {
    this.setState((prevState) => ({
      showButton: !prevState.showButton,
    }));
  };
  render() {
    return (
      <div>
        <span className="day-display">{`Day ${this.props.day_id}`}</span>

      <div className={`${this.props.dayOver ? "finished-day" : "timeline-day"} day-scroll`}>
        {/* {this.generateWarning()} */}
        {this.props.notes
          ? this.props.notes.map((note) => (
            <div className='day-notes'>
                {note.text}{" "}
                {/* <button onClick={() => console.log("deleted!")}>X</button> */}
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
          </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...state,
    notes: state.notes.notes.filter(
      (note) =>
        note.day_id === props.day_id && note.project_id === props.project_id
    ),
  };
};

export default connect(mapStateToProps)(TimelineItem);
