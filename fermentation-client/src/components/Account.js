import React from 'react'
import composedAuthHOC from '../HOCs/authHOC'
import { connect } from 'react-redux'

const Account = (props) => {
  var currentDate = new Date().getTime();
  var today = new Date();
  var todaysDate =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  console.log(props.allProjects)
  console.log(currentDate)
  const timeOfAllProjects = (allProjects) => {
    let totalTime = 0
    allProjects.forEach(project => {
      const start = new Date(project.created_at).getTime()
      totalTime += (currentDate - start)
    })
    return Math.floor(totalTime / (1000*3600*24))
  }


  return(
  
    <div className='account-page'>
    {todaysDate}
      <div>
     You currently have this many projects: {props.allProjects.length}
      </div>
      <div>

     Combined time fermenting: {timeOfAllProjects(props.allProjects)} Days 
      </div>

      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.user.logged_in,
    user: state.user.currentUser.user,
    allProjects: state.project.projects.filter(
      (project) => project.user.id == state.user.currentUser.user.id
    )
  };
};

// export default connect(mapStateToProps)(Account)
export default composedAuthHOC(connect(mapStateToProps)(Account))

