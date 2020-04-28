import React from "react";
import TimelineItem from "../components/TimelineItem";
// map props to day array
// map through day array to produce divs for each
// populate each div with info from each

const ProjectTimeline = (props) => {
  let daysArray = [];
  const { name, end_date, created_at, notes } = props.project;
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
    // loop through days
    for (let i = startDate; i < projectedEndDate; i += dayInMilliseconds) {
      //loop through notes for each day
      for (let j = 0; j < notes.length; j++) {
        let noteDay = new Date(notes[j].created_at).getTime(); // notes creation day in MS

        if (i < noteDay && noteDay < i + dayInMilliseconds) {
          console.log("day with note was pushed");
          // if note creation is within the range of a day, hand it to the component
          daysArray.push(<TimelineItem id={dayCounter + 1} notes={notes[j]} />);
        }
      }
      if (daysArray.length < dayCounter+1) {
        daysArray.push(<TimelineItem id={dayCounter + 1} notes={null} />);
      }
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
