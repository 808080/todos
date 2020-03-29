import React from 'react';
import styled from 'styled-components';

import FilterBtn from './filter-btn';

class Filter extends React.Component {
  render() {
    return (
      <FilterOptions>
        <FilterBtn
          filterBy="all"
          onListFilter={this.props.onListFilter}
          currentFilter={this.props.currentFilter}
        />

        <FilterBtn
          filterBy="active"
          onListFilter={this.props.onListFilter}
          currentFilter={this.props.currentFilter}
        />

        <FilterBtn
          filterBy="complete"
          onListFilter={this.props.onListFilter}
          currentFilter={this.props.currentFilter}
        />
      </FilterOptions>
    )
  }
}

const FilterOptions = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 0;

  @media (max-width: 450px){
    bottom: 10px;
  }
`;

export default Filter;