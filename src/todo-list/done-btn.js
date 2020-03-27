import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';

class DoneBtn extends React.Component{
  toggleCheck = () => {
    let index = this.props.index;
    this.props.listItems[index].active = !this.props.listItems[index].active;

    this.props.parentCallback(this.props.listItems);
  }

  render(){
    return (
      <InputGroup.Prepend
        as="label"
        htmlFor={"check" + this.props.index}
      >
        <InputGroup.Checkbox
          type="checkbox"
          checked={!this.props.active ? true : false}
          onChange={this.toggleCheck}
          className=""
          id={"check" + this.props.index}
        />
      </InputGroup.Prepend>
    )
  }
}

export default DoneBtn;