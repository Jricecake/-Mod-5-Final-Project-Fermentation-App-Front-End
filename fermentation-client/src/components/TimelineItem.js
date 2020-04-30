import React, { Component } from "react";
import AddNote from "./AddNote";
import { createSelector } from 'reselect'
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

export const getNotes = state => state.notes.data

export const getProjectId = state => state;

export const notesByProjectSelector = createSelector(
  [
    getNotes,
    getProjectId
  ],
  (notes, project_id) => {
  console.log(notes)
  console.log(project_id)
  notes.filter(note=>(note.project_id === project_id)
)})

const mapStateToProps = (state, this.props) =>{
  return {
    ...state,
    notes: notesByProjectSelector(state, ownProps)
  };
  debugger
};

export default connect(mapStateToProps)(TimelineItem);

