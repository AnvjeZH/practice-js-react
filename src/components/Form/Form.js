const { Component } = require('react');

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'Junior',
    license: false
  };

  handlerSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  handlerChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLicenceChange = e => {
    this.setState({license: e.target.checked})
  }
  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlerChange}
          />
        </label>
        <label>
          Nickname
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handlerChange}
          />
        </label>

        <p>Your level</p>
        <label>
          Junior <input type="radio" name="experience" onChange={this.handlerChange} checked={this.state.experience === 'Junior'} value="Junior" />
        </label>
        <label>
          Middle <input type="radio" name="experience" onChange={this.handlerChange} checked={this.state.experience === 'Middle'} value="Middle" />
        </label>
        <label>
          Senior <input type="radio" name="experience" onChange={this.handlerChange} checked={this.state.experience === 'Senior'} value="Senior" />
        </label>
        <br/>
        <label> <input type='checkbox' name='license' checked={this.state.license} onChange={this.handleLicenceChange}/> Agree</label>
        <button type="submit" disabled={!this.state.license}>Send</button>
      </form>
    );
  }
}

export default Form;
