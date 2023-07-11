import React from 'react';
import css from './Dropdown.module.css';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({visible: !prevState.visible}))
  }

//   onShow = () => {
//     this.setState({ visible: true });
//   };
//   onHide = () => {
//     this.setState({ visible: false });
//   };
  render() {
    const {visible} = this.state
    return (
      <div>
        <h1 className={css.title}>Dropdown menu</h1>
        <div className={css.dropdown}>
        <button
            type="button"
            className={css.dropdown_toggle}
            onClick={this.toggle}
          >
            {visible ? 'Hide' : 'Show'}
          </button>
          {/* <button
            type="button"
            className={css.dropdown_toggle}
            onClick={this.onShow}
          >
            Show
          </button> */}
          {/* <button
            type="button"
            className={css.dropdown_toggle}
            onClick={this.onHide}
          >
            Hide
          </button> */}

          {visible && <div className={css.dropdown_menu}>Menu</div>}
        </div>
      </div>
    );
  }
}

export default Dropdown;
