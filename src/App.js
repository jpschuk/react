import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";

function App() {
    return (
        <div>
            <BrowserRouter>
                    <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />

                    <Route path='/tienda/:id' element={<ItemDetailContainer/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
