import React from 'react';
import TodoItem from './todo-item';

class TodoList extends React.Component {

  filter = () => {
    let filtered;
    let newArr = this.props.listItems.map((item,index) => {
      item.index = index;
      return item;
    });
    
    switch (this.props.filterBy) {
      case 'active':
        filtered = newArr.filter(item => item.active);
        break;

      case 'completed':
        filtered = newArr.filter(item => !item.active);
        break;

      default:
        filtered = newArr;
        break;
    }

    return filtered;
  }

  render() {
    return (

      <ul id="list">
        {this.filter().map((item) => (
          <TodoItem
            index={item.index}
            active={item.active}
            dataId={item.id}
            key={item.id}
            value={item.text}
            parentCallback={this.props.parentCallback}
            listItems={this.props.listItems}
          />
        ))}
      </ul>
    )
  }
}

export default TodoList;