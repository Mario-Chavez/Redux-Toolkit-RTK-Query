import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/detalles/:id" element={<DetailPage />}></Route>
                {/*<Route exact path="/edit-list/:id" element={<Form />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
