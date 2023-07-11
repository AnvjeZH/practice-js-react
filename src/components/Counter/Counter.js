import React from 'react';
import css from './Counter.module.css';
import Title from './Title';
import Value from './Value';
import Controls from './Controls';


// Подія передається як публічну властивість як метод класу з уже прикріпленим контекстом this

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const {value} = this.state
    return (
      <div>
        <Title/>
        <div className={css.counter}>
          <Value onValue={value}/>
          <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
        </div>
      </div>
    );
  }
}

export default Counter;
