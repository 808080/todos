import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import DoneBtn from './done-btn';
import RemoveBtn from './remove-btn';

class TodoItem extends React.Component {
  state = {
    disabled: true,
    todoText: this.props.value,
  }

  clickCount = 0;
  textInput = React.createRef();

  startEdit = () => {
    this.setState({
      disabled: false
    }, this.activateInput);
  }

  activateInput = () => {
    this.textInput.current.focus();
    this.textInput.current.selectionStart = this.textInput.current.selectionEnd;
  }

  changeHandler = (e) => {
    this.setState({
      todoText: e.target.value
    });

    if (e.key === 'Enter') {
      this.props.listItems[this.props.index].text = this.state.todoText;
      this.props.parentCallback(this.props.listItems);
      this.setState({
        disabled: true,
      });
    }
    if (e.key === 'Escape') {
      this.finishEdit();
    }
  }

  finishEdit = () => {
    this.setState({
      disabled: true,
      todoText: this.props.value
    });
  }

  dbTap = () => {
    this.clickCount++;

    if(this.clickCount === 2){
      this.startEdit();
    }

    setTimeout(() => {
      this.clickCount = 0;
    }, 400)
  }

  render() {
    if(this.props.filterBy === 'all' || this.props.active === this.props.filterBy){
      return (
        <ListGroup.Item
          as="li"
          data-id={this.props.dataId}
          action
          variant={!this.props.active ? 'success' : 'light'}
        >
          <InputGroup>
            <DoneBtn
              listItems={this.props.listItems}
              parentCallback={this.props.parentCallback}
              active={this.props.active}
              index={this.props.index}
            />
            <span
              onClick={this.dbTap}
              className="flex-grow-1"
            >
              <FormControl
                type="text"
                className={this.state.disabled ? 'rounded-0' : 'bg-white'}
                onKeyDown={this.changeHandler}
                onChange={this.changeHandler}
                onBlur={this.finishEdit}
                disabled={this.state.disabled}
                value={this.state.todoText}
                ref={this.textInput}
              />
            </span>
            <RemoveBtn
              listItems={this.props.listItems}
              parentCallback={this.props.parentCallback}
              index={this.props.index}
            />
          </InputGroup>
        </ListGroup.Item>
        )
    } else {
      return null
    }
  }
}

export default TodoItem;