import Counter from "./Counter";
import Dropdown from "./Dropdown";
import colorPicker from "./data/colorPickerArr";
import ColorPicker from "./ColorPicker";

export const App = () => {
  return (
    <div>
      <Counter title = {'It is my first counter on React'} initialValue = {10}/>
      <Dropdown/>
      <ColorPicker options = {colorPicker} initialOptnIndx = {0}/>
    </div>
  );
};
