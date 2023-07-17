import Counter from './Counter';
import Dropdown from './Dropdown';
import colorPicker from './data/colorPickerArr';
import ColorPicker from './ColorPicker';
import Form from './Form/Form';
import { Component } from 'react';

class App extends Component {

// Ця функція до компонента Form
  handlerSubmitForm = data => {
    console.log(data)
  }


  render() {
    return (
      <div>
        <Counter title={'It is my first counter on React'} initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPicker} initialOptnIndx={0} />
        <Form onSubmit={this.handlerSubmitForm} />
      </div>
    );
  }
}

export default App;
