import {Link} from "react-router-dom";

function NavigationMenu() {
    return (
        <div  className="navMenuLinksWrapper">
            <Link className="navMenuLink" to="/form">Форма</Link>
            <Link className="navMenuLink" to="/colorPicker">Палитра</Link>
        </div>
    );
}

export default NavigationMenu;