import colorPickerStyle from "./colorPickerColors.module.css";
import {useDispatch, useSelector} from "react-redux";
import deleteLogo from "../../../imgs/Icon.png";
import {deleteColor} from "../../../redux/slice/colorPickSlice";

function ColorPickerColors() {
    const colorSlice = useSelector(state => state.colorPickSlice);
    const dispatch = useDispatch();

    return (
        <div className={colorPickerStyle.colorPicker}>
            {
                colorSlice.colors.length === 0 ? ""
                    : colorSlice.colors.map((elem,index) => {
                        return (
                            <div
                                className={colorPickerStyle.colorElement}
                                style={{backgroundColor: elem}}
                                key={index}
                            >
                                <img
                                    src={deleteLogo}
                                    alt="No Image"
                                    className={colorPickerStyle.deleteImageButton}
                                    onClick={() => dispatch(deleteColor(index))}
                                />
                            </div>
                        );
                    })
            }
        </div>
    );
}

export default ColorPickerColors;