import React from 'react';
import styled from 'styled-components';

import Filter from './filter';
import RemoveCompletedBtn from './remove-completed-btn';

class Footer extends React.Component {
  render() {
    let activeNum = this.props.listItems.filter(item => item.active).length;

    return (
      <FooterWrap>
        <span
          className="active-num"
        >
          {`${activeNum} item${activeNum === 1 ? '' : 's'} left`}
        </span>

        <Filter
          onListChange={this.props.onListChange}
          onListFilter={this.props.onListFilter}
          currentFilter={this.props.currentFilter}
        />

        <RemoveCompletedBtn
          onListChange={this.props.onListChange}
          listItems={this.props.listItems}
        />
      </FooterWrap>
    )
  }
}

const FooterWrap = styled.footer`
  color: #777;
  padding: 10px 15px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  font-size: 14px;
  height: 40px;

  .active-num{
    float: left;
  }

  @media (max-width: 450px){
    height: 70px;
  }
`;

export default Footer;