import colorPickerStyle from "./colorPicker.module.css";
import ColorPickerColors from "./colorPickerColors/colorPickerColors";
import {useDispatch, useSelector} from "react-redux";
import {addNewColor, toggleInstrumentVisibility} from "../../redux/slice/colorPickSlice";
import ColorPickerInstrument from "./colorPickerInstrument/colorPickerInstrument";

function ColorPicker() {
    const colorSlice = useSelector(state => state.colorPickSlice);
    const dispatch = useDispatch();

    return (
        <section className={colorPickerStyle.colorPickerWrapper}>
            <ColorPickerColors/>
            <button
                className={colorPickerStyle.button}
                onClick={() => dispatch(addNewColor("#fbd924"))}
            >Добавить цвет</button>
            {colorSlice.isInstrumentVisible ? <ColorPickerInstrument/> : ""}
        </section>
    );
}

export default ColorPicker;