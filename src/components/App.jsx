import { nanoid } from 'nanoid';
import ToDoList from './ToDo/ToDoList';
import initialTodos from './data/todos.json';
import Statistics from './ToDo/Statistics';
import ToDoEditor from './ToDo/ToDoEditor/ToDoEditor';
import Filter from './ToDo/Filter/Filter';
import Counter from './Counter';
import Dropdown from './Dropdown';
import colorPicker from './data/colorPickerArr';
import ColorPicker from './ColorPicker';
import Form from './Form/Form';
import { Component } from 'react';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  todoId = nanoid();

  addToDo = message => {
    const newTodo = {
      id: this.todoId,
      text: message,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [newTodo, ...todos],
    }));
  };

  calculateCompletedCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  }
  toggleCompleted = toDoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === toDoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  deleteToDo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredTodo = () => {
    const { todos, filter } = this.state;
    const normalizedFiler = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFiler)
    );
  };
// Ця функція до компонента Form
  handlerSubmitForm = data => {
    console.log(data)
  }

  render() {
    const { todos, filter } = this.state;
    const totalCount = todos.length;
    const completedTodo = this.calculateCompletedCount()
    const filteredTodo = this.getFilteredTodo();

    return (
      <div>
        <Statistics total={totalCount} countCompleted={completedTodo} />

        <ToDoEditor onSubmit={this.addToDo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <ToDoList
          todos={filteredTodo}
          onDeleteToDo={this.deleteToDo}
          toggle={this.toggleCompleted}
        />

        <Counter title={'It is my first counter on React'} initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPicker} initialOptnIndx={0} />
        <Form onSubmit={this.handlerSubmitForm} />
      </div>
    );
  }
}

export default App;
