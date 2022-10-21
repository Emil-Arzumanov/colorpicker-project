import {useDispatch, useSelector} from "react-redux";
import textareaStyle from "./textarea.module.css";

function Textarea() {
    const formSlice = useSelector(state => state.formSlice);
    const dispatch = useDispatch();

    return (
        <>
            <p className={textareaStyle.p}>Response</p>
            <textarea
                readOnly={true}
                className={textareaStyle.response}
                value={formSlice.responseInput}
            />
        </>
    );
}

export default Textarea;