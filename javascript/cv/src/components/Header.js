import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <h1 id='header-title'>Resume Maker</h1>
    )
  }
}

export default Header