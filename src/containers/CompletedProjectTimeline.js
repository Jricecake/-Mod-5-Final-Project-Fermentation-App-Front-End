import React from "react";
import TimelineItem from "../components/TimelineItem";
// map props to day array
// map through day array to produce divs for each
// populate each div with info from each

const CompletedProjectTimeline = (props) => {
  let daysArray = [];
  const { created_at, completion_date, id } = props.project;
  // find todays date and concatenate it into a format that matches backend output

  // find project's start date
  const startDate = new Date(created_at).getTime();
  const dayInMilliseconds = 1000 * 3600 * 24;

  // calculate elapsed time by subtracting start date from current date. result is in milliseconds, so we calculate milliseconds in a day and divide to convert to days
  const elapsedTime = completion_date - startDate;
  const elapsedDays = elapsedTime / dayInMilliseconds

  const addNotesToDays = () => {
    let dayCounter = 0;
    const buildComponent = () => {
       if (elapsedDays > dayCounter) {
         return <TimelineItem project_id={id} day_id={dayCounter + 1} dayOver={true} /> 
        } else {
          return <TimelineItem project_id={id} day_id={dayCounter + 1} dayOver={false} />;
        }
    };
    console.log(startDate)
    console.log(completion_date + dayInMilliseconds)
    
    for (let i = startDate; i < completion_date; i += dayInMilliseconds) {
      console.log(i)
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
export default CompletedProjectTimeline;
