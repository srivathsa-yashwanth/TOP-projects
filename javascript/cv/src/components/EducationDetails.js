import React from 'react'
import Education from './Education'

class EducationDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentDegree: 'Btech',
            currentSpan: '20xx-20xx',
            currentCollege: 'NIT',
            currentDept: 'ECE',
            currentGrade: '7.7',
            data:[]
        }
    }

    takeDegree = (event) => {
        this.setState(
            {
                currentDegree: event.target.value
            }
        )
    }

    takeSpan = (event) => {
        this.setState(
            {
                currentSpan: event.target.value
            }
        )
    }
    takeCollege = (event) => {
        this.setState(
            {
                currentCollege: event.target.value
            }
        )
    }

    takeDept = (event) => {
        this.setState(
            {
                currentDept: event.target.value
            }
        )
    }

    takeGrade = (event) => {
        this.setState(
            {
                currentGrade: event.target.value
            }
        )
    }

    addEducation = () => {
        this.setState(
            {
                data: this.state.data.concat([
                    {
                        degree: this.state.currentDegree,
                        span: this.state.currentSpan,
                        college: this.state.currentCollege,
                        dept: this.state.currentDept,
                        grade: this.state.currentGrade
                    }
                ])
            }
        )
    }

    render(){
        return (
            <div id='education-details'>
                <h2 className='heading'>Education</h2>
                {this.state.data.map((edu) => {
                    return (
                        <Education 
                            degree = {edu.degree} 
                            span = {edu.span}
                            college = {edu.college}
                            dept = {edu.dept}
                            grade = {edu.grade}
                        />
                    )
                })}
                <div className='print-hide' id='education-take'>
                    <input onChange={this.takeDegree} type="text" id='edu-degree-take' value={this.state.currentDegree} />
                    <input onChange={this.takeSpan} type="text" id='edu-degree-span' value={this.state.currentSpan} />
                    <input onChange={this.takeCollege} type="text" id='edu-degree-college' value={this.state.currentCollege} />
                    <input onChange={this.takeDept} type="text" id='edu-degree-dept' value={this.state.currentDept} />
                    <input onChange={this.takeGrade} type="text" id='edu-degree-grade' value={this.state.currentGrade} />
                    <button onClick={this.addEducation}>Add Education</button>
                </div>
            </div>       
            )
    }
}

export default EducationDetails;