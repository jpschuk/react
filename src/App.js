import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/Products/ItemListContainer';


function App() {
  return (
    <div>  
<NavBar></NavBar>
<ItemListContainer greeting = "Serviplast Sanitarios"></ItemListContainer>
    </div>
);
}
export default App;