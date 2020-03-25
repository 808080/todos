import React from 'react';

class RemoveCompletedBtn extends React.Component{

  sendData = (value) => {
    this.props.parentCallback(value);
  }

  deleteDone = () => {
    let removed = this.props.listItems.filter(item => item.active);    
    this.sendData(removed);
  }

  render(){
    return (
      <button onClick={this.deleteDone}>Clear completed [
        <span>
        {
          this.props.listItems.length - this.props.listItems.filter(item => item.active).length
        }
        </span>
      ]</button>
    )
  }
}

export default RemoveCompletedBtn;