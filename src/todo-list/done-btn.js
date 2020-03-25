import React from 'react';

class DoneBtn extends React.Component{

  sendData = (value) => {
    this.props.parentCallback(value);
  }

  toggleCheck = () => {
    let index = this.props.index;
    this.props.listItems[index].active = !this.props.listItems[index].active;

    this.sendData(this.props.listItems);
  }

  render(){
    return (
      <input type="checkbox" checked={!this.props.active ? true : false} onChange={this.toggleCheck} />
    )
  }
}

export default DoneBtn;