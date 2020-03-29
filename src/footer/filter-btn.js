import React from 'react';
import styled from 'styled-components';

class FilterBtn extends React.Component {
  getOption = () => {
    localStorage.setItem('filter', this.props.filterBy);
    this.props.onListFilter(this.props.filterBy);
  }

  render() {
    return (
        <FilterOption 
          className={this.props.currentFilter === this.props.filterBy ? 'selected' : ''}
          onClick={this.getOption}
        >
          {this.props.filterBy}
        </FilterOption>
    )
  }
}

const FilterOption = styled.li`
  display: inline-block;
  color: inherit;
  padding: 0 7px;
  border-radius: 3px;
  cursor: pointer;
  text-transform: capitalize;

  &.selected {
    border: 1px solid rgba(175, 47, 47, 0.2);
  }
`;

export default FilterBtn;