import React from 'react';
import styled from 'styled-components';

import ToggleAll from './toggle-all';

class Header extends React.Component {
  id = +localStorage.getItem('ids') || 0;

  handleInput = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      this.id++;
      localStorage.setItem('ids', this.id);
      const listItems = [...this.props.listItems];
      listItems.push({
        id: this.id,
        active: true,
        text: e.target.value
      });
      this.props.onListChange(listItems);
      e.target.value = '';
    }
  }

  render() {
    return (
      <header>
        <ToggleAll
          onListChange={this.props.onListChange}
          listItems={this.props.listItems}
        />

        <NewTodo
          type="text"
          placeholder="What needs to be done?"
          onKeyDown={this.handleInput}
        />
      </header>
    )
  }
}

const NewTodo = styled.input`
  display: block;
  width: 100%;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  outline: none;

  ::placeholder {
    color: #ccc;
    font-style: italic;
  }
`;

export default Header;