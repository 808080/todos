import React from 'react';

class RemoveBtn extends React.Component{

  sendData = (value) => {
    this.props.parentCallback(value);
  }

  delete = () => {
    this.props.listItems.splice(this.props.index,1);
    this.sendData(this.props.listItems);
  }

  render(){
    return (
      <button onClick={this.delete}>×</button>
    )
  }
}

export default RemoveBtn;