import {useDispatch, useSelector} from "react-redux";
import nameInputStyle from "./nameInputs.module.css";
import {updateNameInput, updatePatronymicInput, updateSurnameInput} from "../../../redux/slice/formSlice";

function NameInputs() {
    const formSlice = useSelector(state => state.formSlice);
    const dispatch = useDispatch();

    return (
        <>
            <p className={nameInputStyle.p}>Имя</p>
            <input
                type="text"
                className={nameInputStyle.input}
                onChange={(e) => dispatch(updateNameInput(e.target.value))}
                value={formSlice.nameInput}
            />
            <p className={nameInputStyle.p}>Фамилия</p>
            <input
                type="text"
                className={nameInputStyle.input}
                onChange={(e) => dispatch(updateSurnameInput(e.target.value))}
                value={formSlice.surnameInput}
            />
            <p className={nameInputStyle.p}>Отчество</p>
            <input
                type="text"
                className={nameInputStyle.input}
                onChange={(e) => dispatch(updatePatronymicInput(e.target.value))}
                value={formSlice.patronymicInput}
            />
        </>
    );
}

export default NameInputs;