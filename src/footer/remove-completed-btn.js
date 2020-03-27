import React from 'react';
import styled from 'styled-components';

class RemoveCompletedBtn extends React.Component {
  deleteDone = () => {
    let list = this.props.listItems.filter(item => item.active);
    this.props.onListChange(list);
  }

  render() {
    const { listItems } = this.props;
    const doneNum =
      listItems.length - listItems.filter(
        item => item.active
      ).length;

    return (
      <RemoveCompleted
        className={doneNum ? '' : 'invisible'}
        onClick={this.deleteDone}
      >
        {`Clear completed [${doneNum}]`}
      </RemoveCompleted>
    )
  }
}

const RemoveCompleted = styled.button`
  float: right;
  background: none;
  border: none;
  color: #777;
  position: relative;
  z-index: 2;

  &:hover{
    text-decoration: underline;
  }
`;

export default RemoveCompletedBtn;