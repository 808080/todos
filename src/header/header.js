import React from 'react';
import ToggleAll from './toggle-all';

class Header extends React.Component{

  constructor(props){
    super(props);

    let counter = 1;
    if (localStorage.getItem('ids')) {
      counter = parseInt(localStorage.getItem('ids'));
    }

    this.id = counter;
  }

  sendData = (value) => {
    this.props.parentCallback(value);
  }

  handleInput = (e) => {
    if(e.key === 'Enter'){
      if(e.target.value){
        this.id++;
        localStorage.setItem('ids', this.id);
        this.props.listItems.push({
          id: this.id,
          active: true,
          text: e.target.value
        });
        this.sendData(this.props.listItems);
      }
      e.target.value = '';          
    }
  }

  render(){
    return (
      <header>
        <h1>todos</h1>
        <ToggleAll
          parentCallback={this.props.parentCallback}
          listItems={this.props.listItems}
        />
        <input type="text" placeholder="What needs to be done?" onKeyPress={this.handleInput} />
      </header>
    )
  }
}

export default Header;