import React from 'react';
import styled from 'styled-components';

import DoneBtn from './done-btn';
import RemoveBtn from './remove-btn';

class TodoItem extends React.Component {
  state = {
    disabled: true,
    todoText: this.props.item.text,
  }

  clickCount = 0;
  textInput = React.createRef();

  startEdit = () => {
    this.setState({
      disabled: false
    }, () => {
      this.textInput.current.focus();
      this.textInput.current.selectionStart = this.textInput.current.selectionEnd;
    });
  }

  changeHandler = (e) => {
    this.setState({
      todoText: e.target.value
    });

    if (e.key === 'Enter') {
      let list = this.props.listItems;
      list[this.props.index].text = this.state.todoText;
      this.props.onListChange(list);
      this.setState({
        disabled: true
      });
    } else if (e.key === 'Escape') {
      this.finishEdit();
    }
  }

  finishEdit = () => {
    this.setState({
      disabled: true,
      todoText: this.props.item.text
    });    
  }

  dbTap = () => {
    this.clickCount++;

    if (this.clickCount === 2 && this.state.disabled) {
      this.startEdit();
    }

    setTimeout(() => {
      this.clickCount = 0;
    }, 400)    
  }

  render() {
    if (
      this.props.filterBy !== 'all' &&
      this.props.item.active.toString() !== this.props.filterBy
    ) return null;

    return (
      <ListItem
        className={!this.props.item.active ? 'done' : ''}
      >
        <DoneBtn
          listItems={this.props.listItems}
          onListChange={this.props.onListChange}
          active={this.props.item.active}
          index={this.props.index}
        />

        <div
          onClick={this.dbTap}
          className={`input-wrap ${this.state.disabled ? '' : 'edit'}`}
        >
          <label className="text-display">
            {this.state.todoText}
          </label>

          <input
            type="text"
            className="text-input"
            onKeyDown={this.changeHandler}
            onChange={this.changeHandler}
            onBlur={this.finishEdit}
            disabled={this.state.disabled}
            value={this.state.todoText}
            ref={this.textInput}
          />
        </div>

        <RemoveBtn
          listItems={this.props.listItems}
          onListChange={this.props.onListChange}
          index={this.props.index}
        />
      </ListItem>
    )
  }
}

const ListItem = styled.li`
  border-bottom: 1px solid #ededed;
  box-sizing: border-box;
  display: flex;
  position: relative;

  :hover button {
    opacity: 1;
  }

  .edit {
    .text-input {
      display: block;
    }

    .text-display {
      display: none;
    }
  }

  .input-wrap {
    width: 100%;
  }

  .text-input,
  .text-display {
    width: 100%;
    padding: 12px 15px;
    line-height: 1.2;
    background: #ffffff;
    box-sizing: border-box;
    line-height: 1.4em;
    margin: 0;
    border: 1px solid transparent;
  }

  .text-display {
    word-break: break-all;
  }

  .text-input {
    position: relative;
    z-index: 5;
    outline: none;
    display: none;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default TodoItem;