import React from 'react';
import Button from 'react-bootstrap/Button';

class FilterBtn extends React.Component {
  getOption = () => {
    localStorage.setItem('filter', this.props.filterBy);
    this.props.filterCallback(this.props.filterBy);
  }

  render() {
    return (
        <Button
          onClick={this.getOption}
        >
          {this.props.filterBy}
        </Button>
    )
  }
}

export default FilterBtn;