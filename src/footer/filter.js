import React from 'react';
import styled from 'styled-components'

class Filter extends React.Component{



  render(){
    return (
      <StyledUl>
        <li data-filter="all">All</li>
        <li data-filter="active">Active</li>
        <li data-filter="completed">Completed</li>
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