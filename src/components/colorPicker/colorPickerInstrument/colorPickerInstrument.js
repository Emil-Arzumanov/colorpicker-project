import ColorPickerInstrumentStyle from "./colorPickerInstrument.module.css";
import {useDispatch, useSelector} from "react-redux";
import {ChromePicker} from "react-color";
import {toggleInstrumentVisibility, updateCurrentColor} from "../../../redux/slice/colorPickSlice";

function ColorPickerInstrument() {
    const colorSlice = useSelector(state => state.colorPickSlice);
    const dispatch = useDispatch();

    return (
        <div
            className={ColorPickerInstrumentStyle.divWrapper}
            onClick={() => dispatch(toggleInstrumentVisibility())}
        >
            <div
                className={ColorPickerInstrumentStyle.instrumentWrapper}
                onClick={(e) => {e.stopPropagation();}}
            >
                <ChromePicker
                    className={ColorPickerInstrumentStyle.instrument}
                    color={colorSlice.colors[colorSlice.currentColorId]}
                    onChange={(e) => dispatch(updateCurrentColor(e.hex))}
                />
            </div>
        </div>
    );
}

export default ColorPickerInstrument;