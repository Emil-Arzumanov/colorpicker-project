import {Link} from "react-router-dom";

function ColorPicker() {
    return (
        <div className="mainDivWrapper">
            <div className="mainDiv">
                <div className="mainDiv__links">
                    <Link to="/">Форма</Link>
                    <Link to="/colorPicker">Палитра</Link>
                </div>
                <div>
                    color
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;