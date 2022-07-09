import React from 'react';
import Bio from './Bio';
import EducationDetails from './EducationDetails';
import JobDetails from './JobDetails';
import ProjectDetails from './ProjectDetails';
import Skills from './Skills';


class Paper extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
     <div id='paper'>
        <Bio/>
        < Skills />
        <ProjectDetails/>
        <JobDetails/>
        <EducationDetails />

     </div>
    )
  }
}

export default Paper