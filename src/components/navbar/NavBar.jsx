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
        <div className ="col-lg col-md-6 col-sm-9 navBarBox">
            <li className ="navBarList">
                <a href="#" className ="navAnchor">Home</a>
            </li>
        </div>

        <div className ="col-lg col-md-6 col-sm-9">
            <li className ="navBarList">
                <a href="#" className ="navAnchor">Tienda</a>
            </li>
        </div>

        <div className ="col-lg col-md-6 col-sm-9">
            <li className ="navBarList">
                <a href="#" className ="navAnchor">Contacto</a>
            </li>
        </div>

        <div className ="col-lg col-md-6 col-sm-9">
            <li className ="navBarList">
                <a href="#" className ="navAnchor">Nosotros</a>
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
