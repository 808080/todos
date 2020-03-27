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
          {this.props.filterName}
        </FilterOption>
    )
  }
}

const FilterOption = styled.li`
  display: inline;
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border-radius: 3px;
  cursor: pointer;

  &.selected {
    border: 1px solid rgba(175, 47, 47, 0.2);
  }
`;

export default FilterBtn;