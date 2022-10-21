import {Outlet} from "react-router-dom";
import mainStyle from "./mainDivComponentStyle.module.css";
import NavigationMenu from "./navigationMenu/navigationMenu";

function MainDivComponent() {
    return (
        <div className={mainStyle.mainWrapper}>
            <main className={mainStyle.main}>
                <NavigationMenu/>
                <Outlet/>
            </main>
        </div>
    );
}

export default MainDivComponent;