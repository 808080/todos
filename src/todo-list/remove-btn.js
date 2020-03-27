import React from 'react';
import styled from 'styled-components';

class RemoveBtn extends React.Component {
  delete = () => {
    const updatedList = this.props.listItems;
    updatedList.splice(this.props.index, 1);
    this.props.onListChange(updatedList);
  }

  render() {
    return (
      <DeleteBtn
        onClick={this.delete}
      >
        ×
      </DeleteBtn>
    )
  }
}

const DeleteBtn = styled.button`
  position: absolute;
  right: 10px;
  bottom: 8px;
  width: 40px;
  height: 40px;
  font-size: 30px;
  cursor: pointer;
  background: none;
  border: none;
  color: #cc9a9a;
  transition: 0.1s;
  z-index: 2;

  &:hover {
    color: #af5b5e;
  }

  @media (min-width: 540px){
    opacity: 0;
  }
`;

export default RemoveBtn;