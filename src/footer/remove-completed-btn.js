import React from 'react';
import Button from 'react-bootstrap/Button';

class RemoveCompletedBtn extends React.Component {
  deleteDone = () => {
    let removed = this.props.listItems.filter(item => item.active);
    this.props.parentCallback(removed);
  }

  render() {
    const { listItems } = this.props;
    const doneNum =
      listItems.length - listItems.filter(
        item => item.active
      ).length;

    return (
      <Button
        className={doneNum ? '' : 'invisible'}
        variant="outline-primary"
        onClick={this.deleteDone}
      >
        Clear completed [
        <span>{doneNum}</span>
        ]
      </Button>
    )
  }
}

export default RemoveCompletedBtn;