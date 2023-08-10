import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListFoods from "./components/ListFoods";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<ListFoods />}></Route>
                <Route exact path="/detalles" element={<Detail />}></Route>
                {/*<Route exact path="/edit-list/:id" element={<Form />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
