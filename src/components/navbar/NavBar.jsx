import { Link } from 'react-router-dom';
import Cartwidget from   './Carwidget';
import './navBar.css'
// import logo from "../assets/img/logoHome.png"
function NavBar(){
    return(
<header>
    <div className="row logoImg">
        <a className="row logoImg" href="#">
        <img className="col-lg-12 imgHome" src="/assets/img/logoHome.png" alt=""/>
        </a>
    </div>
    <section className = "row navBarContainer">
        <div className ="col-lg col-md-3 col-sm-9 navBarBox">
            <li className ="navBarList">
                <Link to ="/" className ="navAnchor">Home</Link>
            </li>
        </div>

        <div className ="col-lg col-md-6 col-sm-9">
            <li className ="navBarList">
                <Link to ="/tienda" className ="navAnchor">Tienda</Link>
            </li>
        </div>

        <div className ="col-lg col-md-6 col-sm-9">
            <li className ="navBarList">
                <Link to="#" className ="navAnchor">Contacto</Link>
            </li>
        </div>

        <div className ="col-lg col-md-6 col-sm-9">
            <li className ="navBarList">
                <Link to ="#" className ="navAnchor">Nosotros</Link>
            </li>
        </div>
        <div className ="col">
            <Cartwidget></Cartwidget>
        </div>
 
    </section>
</header>
    )
}
export default NavBar;
