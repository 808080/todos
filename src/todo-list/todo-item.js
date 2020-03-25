import React from 'react';
import styled from 'styled-components'
import DoneBtn from './done-btn';
import RemoveBtn from './remove-btn';

class TodoItem extends React.Component{
  render(){
    return (
      <StyledLi data-id={this.props.dataId}>
        <DoneBtn 
          listItems={this.props.listItems} 
          parentCallback={this.props.parentCallback}
          active={this.props.active}
          index={this.props.index}
        />
        <p className={!this.props.active ? 'done' : ''}>{this.props.value}</p>
        <RemoveBtn 
          listItems={this.props.listItems} 
          parentCallback={this.props.parentCallback}
          index={this.props.index}
        />
      </StyledLi>
    )
  }
}

const StyledLi = styled.li`
  padding: 5px 10px;
  transition: 0.1s;
  cursor: pointer;
  display: flex;
  align-items: center;

  p {
    padding: 0 20px;
  }

  :hover {
    background-color: lime;
  }
`;

export default TodoItem;