import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/Products/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>  
      <BrowserRouter/>
<NavBar></NavBar>
<ItemListContainer greeting = "Serviplast Sanitarios"></ItemListContainer>
    </div>
);
}
export default App;