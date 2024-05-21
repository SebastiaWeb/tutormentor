import circulo from "../assets/images/circulo.png";
import element from "../assets/images/element.png";

function Header() {
    

    return (<>
        <header className="px-5 w-100 d-flex align-items-center justify-content-between header">
            <div className="header-titulo col-4">
                <h1>TUTOR MENTOR</h1>
            </div>
            <div className="header-search col-4">
                <input type="search" name="search" id="search" className="col-8" placeholder="Search in course"/>
            </div>
            <div className="header-ajustes col-4 d-flex justify-content-end">
                 <div className="mx-3">
                    <img src={circulo} alt="" />
                 </div>
                 <div>
                 <img src={element} alt="" />

                 </div>
            </div>
        </header>
    </>)
}

export default Header;