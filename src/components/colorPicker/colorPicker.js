import colorPickerStyle from "./colorPicker.module.css";
import ColorPickerColors from "./colorPickerColors/colorPickerColors";
import {useDispatch, useSelector} from "react-redux";
import {addNewColor} from "../../redux/slice/colorPickSlice";

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
        </section>
    );
}

export default ColorPicker;