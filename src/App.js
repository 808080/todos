/*
component structure (to be updated):

- todos app
  - header
    - toggle all button
    - new todo input
  - section with todos
    - todo list item
      - status checkbox
      - remove button
  - footer
    - number of active items left
    - status filter
      - show all todos
      - show active todos
      - show completed todos
    - remove completed todos button

*/


import React from 'react';
import Header from './header/header';
import TodoList from './todo-list/todo-list';
import Footer from './footer/footer';
import './style.css';

class App extends React.Component {

  state = {
    listItems: [],
    filterBy: 'all'
  };

  componentDidMount(){
    let storage = [];

    if(localStorage.getItem('list')){
      storage = JSON.parse(localStorage.getItem('list'))
    }

    this.setState({
      listItems: storage
    });    
  }

  filterCallback = (value) => {
    this.setState({
      filterBy: value
    });
  }

  inputCallback = (value) => {
    localStorage.setItem('list', JSON.stringify(value));
    this.setState({
      listItems: value
    });

    console.log(this.state.listItems);
  }

  render(){
    return (
      <section>
        <Header
          parentCallback={this.inputCallback}
          listItems={this.state.listItems}
        />
        <TodoList
          parentCallback={this.inputCallback}
          listItems={this.state.listItems}
          filterBy={this.state.filterBy}
        />
        <Footer
          parentCallback={this.inputCallback}
          filterCallback={this.filterCallback}
          listItems={this.state.listItems}
        />
      </section>
    )
  }
}

export default App;