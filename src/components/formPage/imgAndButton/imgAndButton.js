import fileLogo from "../../../imgs/Vector.png";
import {useDispatch, useSelector} from "react-redux";
import imgButtonStyle from "./imgAndButtonStyle.module.css"
import {addMainImageToState, deleteImageFromState, postDataFromForm} from "../../../redux/slice/formSlice";

function ImgAndButton() {
    const formSlice = useSelector(state => state.formSlice);
    const dispatch = useDispatch();

    return (
        <>
            <p className={imgButtonStyle.p}>Фото</p>
            {
                formSlice.mainImgURL == null
                    ? <>
                        <label htmlFor="file-upload" className={imgButtonStyle.label}>
                            <img src={fileLogo} alt="No Image" className={imgButtonStyle.img}/>
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className={imgButtonStyle.input}
                            onChange={(e) => dispatch(addMainImageToState(e.target.files[0]))}
                        />
                    </>
                    : <label htmlFor="file-upload" className={imgButtonStyle.label}>
                        <img src={formSlice.mainImgURL} className={imgButtonStyle.selectedImg} alt="No Image"/>
                        <button
                            className={imgButtonStyle.deleteImgButton}
                            onClick={() => dispatch(deleteImageFromState())}
                        >Х</button>
                    </label>
            }
            <button
                className={imgButtonStyle.button}
                onClick={() => dispatch(postDataFromForm({
                    name:formSlice.nameInput,
                    surname:formSlice.surnameInput,
                    patronymic:formSlice.patronymicInput,
                    mainImage:formSlice.mainImg,
                }))}
            >Сохранить</button>
        </>
    );
}

export default ImgAndButton;