import React from 'react';
import Filter from './filter';
import RemoveCompletedBtn from './remove-completed-btn';

class Footer extends React.Component{


  render(){
    return (
      <footer>
        <span>{this.props.listItems.filter(item => item.active).length}</span>
        <Filter
          parentCallback={this.props.parentCallback}
          listItems={this.props.listItems}
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