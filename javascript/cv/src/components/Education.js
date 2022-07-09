import React from 'react'

class Education extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div className='education'>
                <h3 className='edu-degree'>{this.props.degree}</h3> <span className='edu-span'>{this.props.span}</span>
                <h3 className='edu-clg'>{this.props.college}</h3>
                <p className='edu-dept'>{this.props.dept}</p>
                <p className='edu-cgpa'>{this.props.grade}</p>
            </div>
        )
    }
}

export default Education