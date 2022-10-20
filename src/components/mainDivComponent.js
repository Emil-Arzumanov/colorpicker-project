import {Outlet} from "react-router-dom";
import "./mainDivComponentStyle.css";
import NavigationMenu from "./navigationMenu/navigationMenu";

function MainDivComponent() {
    return (
        <div className="mainWrapper">
            <main className="main">
                <NavigationMenu/>
                <Outlet/>
            </main>
        </div>
    );
}

export default MainDivComponent;