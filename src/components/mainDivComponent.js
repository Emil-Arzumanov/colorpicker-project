import {Link} from "react-router-dom";

function MainDivComponent() {
    return (
        <div className="mainDivWrapper">
            <div className="mainDiv">
                <div className="mainDiv__links">
                    <Link to="/">Форма</Link>
                    <Link to="/colorPicker">Палитра</Link>
                </div>
                <div>
                    main
                </div>
            </div>
        </div>
    );
}

export default MainDivComponent;