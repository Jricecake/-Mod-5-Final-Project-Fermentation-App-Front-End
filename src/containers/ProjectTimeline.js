import React from "react";
import TimelineItem from "../components/TimelineItem";
// map props to day array
// map through day array to produce divs for each
// populate each div with info from each

const ProjectTimeline = (props) => {
  let daysArray = [];
  const { created_at, id} = props.project;
  const { notes } = props
  // const { notes } = props
  // find todays date and concatenate it into a format that matches backend output
  var today = new Date();
  var todaysDate =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

  // find project's start date
  const currentDate = new Date(todaysDate).getTime();
  const startDate = new Date(created_at).getTime();
  const dayInMilliseconds = 1000 * 3600 * 24;

  // calculate elapsed time by subtracting start date from current date. result is in milliseconds, so we calculate milliseconds in a day and divide to convert to days
  const elapsedTime = currentDate - startDate;
  let elapsedDays = elapsedTime / dayInMilliseconds
  const addNotesToDays = () => {
    let dayCounter = 0;
    const buildComponent = () => {
       if (elapsedDays > dayCounter) {
         return <TimelineItem notes={notes} project_id={id} day_id={dayCounter + 1} dayOver={true} /> 
        } else {
          return <TimelineItem notes={notes}project_id={id} day_id={dayCounter + 1} dayOver={false} />;
        }
    };
    
    for (let i = startDate; i < currentDate + dayInMilliseconds; i += dayInMilliseconds) {
      daysArray.push(buildComponent());

      dayCounter += 1;
    }
  };

  const renderDays = (daysArray) => {
    return daysArray.map((day) => day);
  };

  addNotesToDays();

  return (
    <div className="timeline">
      {renderDays(daysArray)}
    </div>
  );
};
export default ProjectTimeline;
