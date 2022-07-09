import React from 'react'

class Job extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
    }

    render(){
        return(
            < div className='job'>
                <h3 className='job-title'>{this.props.title}</h3> 
                <h3 className='job-org'>{this.props.company}</h3> <span className='job-span'>{this.props.span}</span>
                <ul className='job-accomps'>
                    {this.props.accomps.map((acc) => <li className='job-accomp' key={acc}>{acc}</li>)}
                </ul>
            </div>
        )
    }
}

export default Job