import React from 'react';
import styled from 'styled-components';

class ToggleAll extends React.Component {
  allChecked = () => {
    for (let i = 0; i < this.props.listItems.length; i++) {
      if (this.props.listItems[i].active) {
        return false;
      }
    }
    return !this.props.listItems.length ? false : true;
  }

  checkAll = () => {
    let list = this.props.listItems;
    if (!this.allChecked()) {
      list.map(item => item.active = false);
    } else {
      list.map(item => item.active = true);
    }
    this.props.onListChange(list);
  }

  render() {
    return (
      <ToggleBtn>
        <input
          id="toggle-all"
          type="checkbox"
          checked={this.allChecked()}
          onChange={this.checkAll}
        />

        <label htmlFor="toggle-all">❯</label>
      </ToggleBtn>
    )
  }
}

const ToggleBtn = styled.div`
  label{
    margin: 0;
    position: absolute;
    transform: rotate(90deg);
    font-size: 22px;
    color: #e6e6e6;
    padding: 17px 21px;
    cursor: pointer;
  }

  #toggle-all:checked + label {
    color: #4d4d4d;
  }

  #toggle-all {
    display: none;
  }
`;

export default ToggleAll;