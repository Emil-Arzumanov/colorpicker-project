import {Link} from "react-router-dom";
import navStyle from "./navigationMenu.module.css";

function NavigationMenu() {
    return (
        <div  className={navStyle.navWrapper}>
            <Link className={navStyle.navLink} to="/">Форма</Link>
            <Link className={navStyle.navLink} to="/colorPicker">Палитра</Link>
        </div>
    );
}

export default NavigationMenu;