import React from 'react';

class ToggleAll extends React.Component{

  sendData = (value) => {
    this.props.parentCallback(value);
  }

  allChecked = () => {
    for (let i = 0; i < this.props.listItems.length; i++) {
      if(this.props.listItems[i].active){
        return false;
      }
    }
    return !this.props.listItems.length ? false : true;
  }

  checkAll = () => {
    if(!this.allChecked()){
      this.props.listItems.map(item => item.active = false);
    } else {
      this.props.listItems.map(item => item.active = true);
    }
    this.sendData(this.props.listItems);
  }

  render(){
    return (
      <input type="checkbox" checked={this.allChecked()} onChange={this.checkAll} />
    )
  }
}

export default ToggleAll;