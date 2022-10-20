import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainDivComponent from "./components/mainDivComponent";
import ColorPicker from "./components/colorPicker/colorPicker";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainDivComponent/>}/>
                <Route path="/colorPicker" element={<ColorPicker/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
