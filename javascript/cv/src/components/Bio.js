import React from 'react';


class Bio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'show',
      data:{
        name:'Thomas Shelby',
        desc: 'I am Thomas Shelby, MP, OBE. I am out of Small Heath and I worked my way up to the London Parliament. I have served the country in the war, I was a tunneler and operated in France. I am the proud CEO of Shelby Company Limited. We specialize in the import and export of car parts.',
        email: 'tommyshelby@gmail.com',
        phone: '9876543210',
        git: 'github.com/thomas-shelby',

      }
    };
  }

  getRenderShow = () => {

    return (
      <div id='bio-show'>
        <h1 id='name-show'>{this.state.data.name}</h1>
        <p id="desc-show">{this.state.data.desc}</p>
        <div id="socials-show">
            <ul>
                <li id='email-show'>{this.state.data.email}</li>
                <li id='phone-show'>{this.state.data.phone}</li>
                <li id='git-show'>{this.state.data.git}</li>
                <button className='print-hide' onClick={this.changeMode}>Edit</button>
            </ul>
        </div>
        <img id="image-show" src="no_limitations.png" alt="" height='50' width='50' />
    </div>
    )
  }

  getRenderTake = () => {
    return (
      <div id='bio-take'>
        <input onChange={this.takeName} type="text" id="bio-name-take" placeholder="Enter Name" value={this.state.data.name}/>
        <textarea onChange={this.takeDesc} name="" id="bio-desc-take" cols="30" rows="10" placeholder="About Yourself" value={this.state.data.desc}></textarea>
        <input onChange={this.takeEmail} type="email" id='bio-email-take' placeholder="Enter Email" value={this.state.data.email}/>
        <input onChange={this.takePhone} type="tel" id="bio-num-take" placeholder="Enter Phone" value={this.state.data.phone}/>
        <input onChange={this.takeGit} type="text" id='bio-git-take' placeholder="Paste Github Link" value={this.state.data.git}/>
        <button onClick={this.changeMode}>Save</button>
  </div>
    )
  }

  takeName = (event) => {
    this.setState(
      {
        data: {
          name: event.target.value,
          desc: this.state.data.desc,
          email: this.state.data.email,
          phone: this.state.data.phone,
          git: this.state.data.git,
        }
      }
    )
  }

  takeDesc = (event) => {
    this.setState(
      {
        data: {
          desc: event.target.value,
          name: this.state.data.name,
          email: this.state.data.email,
          phone: this.state.data.phone,
          git: this.state.data.git,
        }
      }
    )
  }

  takeEmail = (event) => {
    this.setState(
      {
        data: {
          email: event.target.value,
          desc: this.state.data.desc,
          name: this.state.data.name,
          phone: this.state.data.phone,
          git: this.state.data.git,
        }
      }
    )
  }

  takePhone = (event) => {
    this.setState(
      {
        data: {
          phone: event.target.value,
          desc: this.state.data.desc,
          email: this.state.data.email,
          name: this.state.data.name,
          git: this.state.data.git,
        }
      }
    )
  }

  takeGit = (event) => {
    this.setState(
      {
        data: {
          git: event.target.value,
          desc: this.state.data.desc,
          email: this.state.data.email,
          phone: this.state.data.phone,
          name: this.state.data.name,
        }
      }
    )
  }

  getRender = () => {
    if (this.state.mode === 'show'){
      return this.getRenderShow();
    }
    else if (this.state.mode === 'take'){
      return this.getRenderTake();
    }
  }

  changeMode = (event) => {
    const currentMode = this.state.mode;
    if (currentMode === 'show'){
      this.setState({
        mode:'take',
      });
      event.target.textContent = 'Save';

    }
     else if (currentMode === 'take'){
      this.setState({
        mode:'show'
      })
      event.target.textContent = 'Edit'
     }
  }

  render(){
    return (
    this.getRender()   
    )
  }
}

export default Bio
