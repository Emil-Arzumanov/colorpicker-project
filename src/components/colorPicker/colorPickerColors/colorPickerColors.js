import colorPickerStyle from "./colorPickerColors.module.css";
import {useDispatch, useSelector} from "react-redux";
import deleteLogo from "../../../imgs/Icon.png";
import {deleteColor, updateCurrentColorId} from "../../../redux/slice/colorPickSlice";

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
                                onClick={() => dispatch(updateCurrentColorId(index))}
                            >
                                <img
                                    src={deleteLogo}
                                    alt="No Image"
                                    className={colorPickerStyle.deleteImageButton}
                                    onClick={(event) => {
                                        dispatch(deleteColor(index));
                                        event.stopPropagation();
                                    }}
                                />
                            </div>
                        );
                    })
            }
        </div>
    );
}

export default ColorPickerColors;