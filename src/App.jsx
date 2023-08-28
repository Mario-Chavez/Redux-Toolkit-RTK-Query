import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppBotton from "./components/WhatsAppBotton";
import Register from "./pages/Register";
import RoutesProtect from "./routes/RoutesProtect";
import RoutesAdmin from "./routes/RoutesAdmin";
import Error404 from "./pages/Error404";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/detalles/:id" element={<DetailPage />}></Route>
                <Route exact path="/register" element={<Register />}></Route>
                <Route
                    path="/user/*"
                    element={
                        <RoutesProtect>
                            <RoutesAdmin></RoutesAdmin>
                        </RoutesProtect>
                    }
                ></Route>
                <Route path="*" element={<Error404 />} />
            </Routes>
            <WhatsAppBotton />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
