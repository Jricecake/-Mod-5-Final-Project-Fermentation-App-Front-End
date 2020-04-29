import React, { Component } from "react";
import AddNote from "./AddNote";
import { connect } from "react-redux";

// const [showButton, setShowButton] = useState(false);
class TimelineItem extends Component {
  state = {
    showButton: false
  }

  // componentDidMount(
  //   this.setState({prevState => ({

  //   })
  // )
  generateWarning = () => {
    if (this.props.id > 0 && this.props.id % 3 === 0) {
      return <div>Warning! Check for pressure</div>;
    }
  };

  handleShow = () => {
    this.setState(prevState => ({
      showButton: !prevState.showButton
    }));
  };
  render(){
  return (
    <div className="timeline-day">
      {this.generateWarning()}
      <span className="day-display">{`Day ${this.props.day_id}`}</span>
      {this.props.notes ? this.props.notes.map(note => <div>{note.text}</div>) : null}
      <button onClick={this.handleShow}></button>
      {this.state.showButton ? <AddNote project_id={this.props.project_id} day_id={this.props.day_id}/> : null}
    </div>
  );
};
}
const mapStateToProps = (state) => {
  return {
    ...state,
    notes: state.notes.notes
  };
  debugger
};

export default connect(mapStateToProps)(TimelineItem);

