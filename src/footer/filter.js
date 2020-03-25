import React from 'react';
import styled from 'styled-components'

class Filter extends React.Component{

  sendData = (value) => {
    this.props.filterCallback(value);
  }

  filterBy = (e) => {
    this.sendData(e.target.getAttribute('data-filter'));
  }

  render(){
    return (
      <StyledUl>
        <li data-filter="all" onClick={this.filterBy}>All</li>
        <li data-filter="active" onClick={this.filterBy}>Active</li>
        <li data-filter="completed" onClick={this.filterBy}>Completed</li>
      </StyledUl>
    )
  }
}

const StyledUl = styled.ul`
  display: flex;
  list-style: none;

  li{
    cursor: pointer;
    transition: 0.1s;
    padding: 5px;

    :hover {
      background-color: lime;
    }
  }
`;

export default Filter;