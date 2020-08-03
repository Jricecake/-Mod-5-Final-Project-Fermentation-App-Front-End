import React, { Component } from "react";
import AddNote from "./AddNote";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

// const [showButton, setShowButton] = useState(false);
class TimelineItem extends Component {
  state = {
    showButton: false,
  };

  generateWarning = () => {
    if (this.props.day_id > 0 && this.props.day_id % 3 === 0) {
      return <span className="day-warning">Warning! Check for pressure</span>;
    }
  };

  handleShow = () => {
    this.setState((prevState) => ({
      showButton: !prevState.showButton,
    }));
  };

  filterNotes = this.props.notes.filter(note => this.props.day_id == note.day_id)

  render() {
    return (
      <>
        <Container>
          <span className="day-display">{`Day ${this.props.day_id}`}</span>
        <button className="day-display note-add-button" onClick={this.handleShow}>
          + Note
        </button>

          <Row
            className={`${
              this.props.dayOver ? "finished-day" : "timeline-day"
            } day-scroll`}
          >
            {/* {this.generateWarning()} */}
            {this.filterNotes
              ? this.filterNotes.map((note) => (
                  <div className="day-notes">
                    {note.text}{" "}
                    <button
                      className="note-delete-button"
                      onClick={() => console.log("deleted!")}
                    >
                      X
                    </button>
                  </div>
                ))
              : null}
            {this.state.showButton ? (
              <AddNote
                handleShow={this.handleShow}
                project_id={this.props.project_id}
                day_id={this.props.day_id}
              />
            ) : null}
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    // notes: state.notes.notes.filter(note => note.project_id == props.project_id && note.day_id == props.day_id)
  };
};

export default connect(mapStateToProps)(TimelineItem);
