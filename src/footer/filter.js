import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import FilterBtn from './filter-btn';

class Filter extends React.Component {
  render() {
    return (
      <ButtonGroup size="sm">
        <FilterBtn
          filterBy="all"
          filterCallback={this.props.filterCallback}
        />
        <FilterBtn
          filterBy="active"
          filterCallback={this.props.filterCallback}
        />
        <FilterBtn
          filterBy="completed"
          filterCallback={this.props.filterCallback}
        />
      </ButtonGroup>
    )
  }
}

export default Filter;