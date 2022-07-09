import React from 'react'
import Project from './Project'

class ProjectDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTitle: 'Face Generation with Stylegan',
            currentDesc: 'Generating new fictional faces using deep learning and gan networks',
            currentTech: ['python','TensorFlow', 'Machine Learning'],
            data: [ ]
        };
    }

    takeProject = () => {
        this.setState(
            {
                data: this.state.data.concat([{
                    title: this.state.currentTitle,
                    desc: this.state.currentDesc,
                    tech: this.state.currentTech
                }])
            }
        )
    }

    takeTitle = (event) => {
        this.setState(
           { currentTitle: event.target.value,
           
        }
        )
    }

    takeDesc = (event) => {
        this.setState(
           { currentDesc: event.target.value}
        )
    }

    takeTech = (event) => {
        let techs = [];
        const techString = event.target.value;
        techs = techString.split(',');
        
        this.setState(
           { currentTech: techs}
        )
    }


    render(){
        return (
            <div id='project-details'>
                <h2 className="heading">Projects</h2>
                {
                    this.state.data.map((project)=> <Project key={project.title} title = {project.title} desc = {project.desc} tech = {project.tech} /> )
                }
                <div className='print-hide' id='project-take'>
                    <input onChange={this.takeTitle} value={this.state.currentTitle} type="text" id='project-title-take'  placeholder='Project Title'/>
                    <textarea onChange={this.takeDesc} value={this.state.currentDesc} name="" id="project-desc-take" cols="10" rows="2" placeholder='About the Project' ></textarea>
                    <textarea onChange={this.takeTech} name="" id="project-tech-take" cols="10" rows="2" placeholder='Enter comma seperated values' ></textarea>
                </div>
                <button className='print-hide' onClick={this.takeProject}>Add Project</button>
            </div>  
            )
    }

}

export default ProjectDetails;