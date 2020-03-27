import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import ToggleAll from './toggle-all';

class Header extends React.Component {
  constructor(props) {
    super(props);

    let counter = 1;
    const ids = localStorage.getItem('ids');
    if (ids) {
      counter = parseInt(ids);
    }

    this.id = counter;
  }

  handleInput = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value) {
        this.id++;
        localStorage.setItem('ids', this.id);
        const listItems = [...this.props.listItems];
        listItems.push({
          id: this.id,
          active: true,
          text: e.target.value
        });
        this.props.parentCallback(listItems);
      }
      e.target.value = '';
    }
  }

  render() {
    return (
      <header className="mb-4">
        <h1 className="display-2 text-center">todos</h1>
        <InputGroup>
          <ToggleAll
            parentCallback={this.props.parentCallback}
            listItems={this.props.listItems}
          />
          <FormControl
            aria-describedby="basic-addon1"
            type="text"
            placeholder="What needs to be done?"
            onKeyPress={this.handleInput}
          />
        </InputGroup>
      </header>
    )
  }
}

export default Header;