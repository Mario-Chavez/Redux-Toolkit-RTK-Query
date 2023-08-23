import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppBotton from "./components/WhatsAppBotton";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/detalles/:id" element={<DetailPage />}></Route>
                {/*<Route exact path="/edit-list/:id" element={<Form />}></Route> */}
            </Routes>
            <WhatsAppBotton />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
