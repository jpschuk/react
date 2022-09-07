
import './navBar.css'
import logo from "../../assets/img/logoHome.png"
function NavBar(){
    return(
<header>
    <div className="row logoImg">
        <img className="col-lg-12 imgHome" src={logo} alt=""/>
    </div>
    <section className = "row navBarContainer">
        <div className ="col-lg-3 col-md-6 col-sm-9 navBarBox">
            <li className ="navBarList">
                <a href="#" className ="navAnchor">Home</a>
            </li>
        </div>

        <div className ="col-lg-3 col-md-6 col-sm-9">
            <li className ="navBarList">
                <a href="#" className ="navAnchor">Tienda</a>
            </li>
        </div>

        <div className ="col-lg-3 col-md-6 col-sm-9">
            <li className ="navBarList">
                <a href="#" className ="navAnchor">Contacto</a>
            </li>
        </div>

        <div className ="col-lg-3 col-md-6 col-sm-9">
            <li className ="navBarList">
                <a href="#" className ="navAnchor">Nosotros</a>
            </li>
        </div>

    </section>
</header>
    )
}
export default NavBar;
