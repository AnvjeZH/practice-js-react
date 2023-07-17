import React, { PureComponent } from 'react';
import css from './ColorPicker.module.css';

class ColorPicker extends PureComponent {
  static defaultProps = {
    initialOptnIndx: 0,
  };
  state = {
    activeOptnIndx: this.props.initialOptnIndx
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeOptnIndx !== this.state.activeOptnIndx
  // }

  makeOptnActive = index => {
    const optionClassName = [css.color_swatch];

    if (index === this.state.activeOptnIndx) {
      optionClassName.push(css.color_active);
    }
    return optionClassName.join(' ');
  };

  activeBtn = index => {
    this.setState({ activeOptnIndx: index });
  };

  render() {
    const { activeOptnIndx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptnIndx];


    return (
      <div>
        <h1 className={css.title}>Color Picker</h1>
        <p className={css.color_name}>Chooses color: {label}</p>
        <div className={css.color_palette}>
          {options.map(({ label, color }, index) => {
            return (
              <button
                type="button"
                key={label}
                className={this.makeOptnActive(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.activeBtn(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
