import React from "react";
import TimelineItem from "../components/TimelineItem";
// map props to day array
// map through day array to produce divs for each
// populate each div with info from each

const ProjectTimeline = (props) => {
  let daysArray = [];
  const { name, end_date, created_at, id, notes } = props.project;
  // find todays date and concatenate it into a format that matches backend output
  var today = new Date();
  var todaysDate =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

  // find project's start date
  const currentDate = new Date(todaysDate).getTime();
  const projectedEndDate = new Date(end_date).getTime();
  const startDate = new Date(created_at).getTime();
  const dayInMilliseconds = 1000 * 3600 * 24;
  const weekInMilliseconds = dayInMilliseconds * 7;

  // debugger
  // calculate elapsed time by subtracting start date from current date. result is in milliseconds, so we calculate milliseconds in a day and divide to convert to days
  let differenceInTime = currentDate - startDate;
  const elapsedTime = currentDate - startDate;
  const renderDays = (daysArray) => {
    return daysArray.map((day) => day);
  };

  const addNotesToDays = () => {
    let dayCounter = 0;
    const buildComponent = (notes) => {
      return <TimelineItem project_id={id} day_id={dayCounter + 1} notes={notes.filter(note=> note.day_id === dayCounter+1)}/>;
    };
    for (let i = startDate; i < projectedEndDate; i += dayInMilliseconds) {
      // let notesCollection = [];
      // for (let j = 0; j < props.notes.length; j++) {
      //   let noteDay = new Date(props.notes[j].created_at).getTime();
      //   if (i < noteDay && noteDay < i + dayInMilliseconds) {
      //     notesCollection.push(props.notes[j]);
      //   }
      // }
      daysArray.push(buildComponent(notes));
      // notesCollection = [];
      // if (daysArray.length < dayCounter + 1) {
      //   daysArray.push(
      //     <TimelineItem project_id={id} id={dayCounter + 1} notes={null} />
      //   );
      // }
      dayCounter += 1;
      // debugger
    }
  };
  addNotesToDays();


  return (
    <div className="timeline">
      Timeline for {name}
      {renderDays(daysArray)}
    </div>
  );
};
export default ProjectTimeline;
