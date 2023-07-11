import Counter from "./Counter";
import Dropdown from "./Dropdown";
import colorPicker from "./data/colorPickerArr";
import ColorPicker from "./ColorPicker";

export const App = () => {
  return (
    <div>
      <Counter initialValue = {10}/>
      <Dropdown/>
      <ColorPicker options = {colorPicker} initialOptnIndx = {0}/>
    </div>
  );
};