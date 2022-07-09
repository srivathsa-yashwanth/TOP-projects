import React from "react";

class Skills extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            data:['python', 'machine learning']
        }
    }

    addSkill = (event)=> {

        this.setState({
            data: this.state.data.concat([event.target.previousSibling.value])
        })
    }

    render(){
        return (
            <div id="skill-set">
                <h2>Skills</h2>
                <div id='skills'>
                    {this.state.data.map((skill) => <div>{skill}</div>)}
                </div>
                <input className='print-hide' type="text" placeholder="Enter Skill" id='take-skill-input'/>
                <button onClick={this.addSkill} id='take-skill-button' className='print-hide' >Add Skill</button>
            </div>
        )
    }
}

export default Skills