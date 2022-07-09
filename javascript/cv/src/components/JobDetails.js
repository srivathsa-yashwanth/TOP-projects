import React from 'react';
import Job from './Job';

class JobDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentTitle: 'Title',
            currentCompany: 'Company',
            currentSpan: '20xx-20xx',
            currentAccomps: ['did this', 'did that'],
            data: []
        }
    }

    addJob = (event) => {
        this.setState({
            data: this.state.data.concat([
                {
                    title: this.state.currentTitle,
                    company: this.state.currentCompany,
                    accomps: this.state.currentAccomps,
                    span: this.state.currentSpan,
                }
            ])
        })
    }

    takeTitle = (event) => {
        this.setState({
            currentTitle: event.target.value
        })
    }

    takeCompany = (event) => {
        this.setState({
            currentCompany: event.target.value

        })
    }

    takeSpan = (event) => {
        this.setState({
            currentSpan: event.target.value
        })
    }

    takeAccomps = (event) => {
        const accomps = event.target.value.split(',')
        this.setState({
            currentAccomps: accomps
        })
    }


    render(){
        return (
            <div id='job-details'>
                <h2 className='heading'>Experience</h2>
                {
                    this.state.data.map((ele) => {
                        return (
                            <Job 
                            title={ele.title} 
                            company= {ele.company}
                            span = {ele.span} 
                            accomps = {ele.accomps} 
                            key = {ele.title}
                            />
                        )
                    } )
                }

                <div className='print-hide' id='job-take'>
                    <input onChange={this.takeTitle} type="text" id='job-title-take' value={this.state.currentTitle}/>
                    <input onChange={this.takeCompany} type="text" id='job-company-take' value={this.state.currentCompany}/>
                    <input onChange={this.takeSpan} type="text" id='job-span-take' value={this.state.currentSpan}/>
                    <textarea onChange={this.takeAccomps} name="" id="job-accomps-take" cols="20" rows="3" placeholder='Comma seperated values'></textarea>
                    <button onClick={this.addJob} >Add Job</button>
                </div>
            </div>
        )
    }
}

export default JobDetails