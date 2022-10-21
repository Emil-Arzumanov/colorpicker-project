import {useDispatch, useSelector} from "react-redux";
import ImgAndButton from "./imgAndButton/imgAndButton";
import NameInputs from "./nameInputs/nameInputs";
import Textarea from "./textarea/textarea";
import formPageStyle from "./formPage.module.css";

function FormPage() {
    const formSlice = useSelector(state => state.formSlice);
    const dispatch = useDispatch();

    return (
        <section className={formPageStyle.section}>
            <NameInputs/>
            <ImgAndButton/>
            <Textarea/>
        </section>
    );
}

export default FormPage;