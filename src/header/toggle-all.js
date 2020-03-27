import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import InputGroup from 'react-bootstrap/InputGroup';

class ToggleAll extends React.Component{
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
    this.props.parentCallback(this.props.listItems);
  }

  render(){
    return (
      <InputGroup.Prepend>
        <ToggleButton
          type="checkbox"
          checked={this.allChecked()}
          onChange={this.checkAll}
        />
      </InputGroup.Prepend>
    )
  }
}

export default ToggleAll;