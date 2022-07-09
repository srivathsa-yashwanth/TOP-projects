import React from "react";

// Face Generation with Stylegan
// Generating new fictional faces using deep learning and gan networks
//

class Project extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div className='project'>
                <h3 className='project-title'>{this.props.title}</h3>
                <p className='project-desc'>{this.props.desc}</p>
                <ul className='project-tech'>
                    {this.props.tech.map((t)=> <li key={t}>{t}</li>)}
                </ul>
            </div>
        )
    }
}

export default Project;