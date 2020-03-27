import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

class RemoveBtn extends React.Component {
  delete = () => {
    const updatedList = this.props.listItems;
    updatedList.splice(this.props.index, 1);
    this.props.parentCallback(updatedList);
  }

  render() {
    return (
      <InputGroup.Append>
        <Button
          variant="danger"
          onClick={this.delete}
        >
          ×
        </Button>
      </InputGroup.Append>
    )
  }
}

export default RemoveBtn;