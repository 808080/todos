import React from 'react';
import styled from 'styled-components';

class DoneBtn extends React.Component{
  toggleCheck = () => {
    let list = this.props.listItems;
    let index = this.props.index;
    list[index].status = list[index].status === 'complete' ? 'active' : 'complete';

    this.props.onListChange(list);
  }

  render(){
    return (
      <DoneWrap>
        <input
          type="checkbox"
          checked={this.props.status === 'complete' ? true : false}
          onChange={this.toggleCheck}
          className="done-checkbox"
          id={"check" + this.props.index}
        />
        <label
          className="done-label"
          htmlFor={"check" + this.props.index}
        />
      </DoneWrap>
    )
  }
}

const DoneWrap = styled.div`
  min-width: 43px;
  position: relative;

  .done-label{
    cursor: pointer;
    display: block;
    height: 30px;
    width: 30px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid #ddd;
    border-radius: 50%;

  }

  .done-checkbox:checked + .done-label {
    border-color: #bddad5;

    &::after{
      content: '';
      display: block;
      position: absolute;
      top: 8px;
      left: 4px;
      z-index: 5;
      width: 18px;
      height: 9px;
      transform: rotate(-53deg);
      border-left: solid 2px #5dc2af;
      border-bottom: solid 2px #5dc2af;
    }
  }

  .done-checkbox {
    display: none;
  }
`;

export default DoneBtn;