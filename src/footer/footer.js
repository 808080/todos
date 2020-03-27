import React from 'react';
import Filter from './filter';
import RemoveCompletedBtn from './remove-completed-btn';
import Badge from 'react-bootstrap/Badge';

class Footer extends React.Component {
  render() {
    let activeNum = this.props.listItems.filter(item => item.active).length;

    return (
      <footer className="d-flex p-3 footer justify-content-around align-content-center">
        <Badge
          variant="primary"
          className="align-middle p-3"
        >
          {`${activeNum} item${activeNum === 1 ? '' : 's'} left`}
        </Badge>
        <Filter
          parentCallback={this.props.parentCallback}
          filterCallback={this.props.filterCallback}
        />
        <RemoveCompletedBtn
          parentCallback={this.props.parentCallback}
          listItems={this.props.listItems}
        />
      </footer>
    )
  }
}

export default Footer;