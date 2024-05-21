import { useNavigate } from 'react-router-dom';

import Input from "../../common/Input/Input";
import burbujaIMG from "../../assets/images/BURBUJA.png";
import camposForm from "./camposForm";
import Check from "../../common/Check/Check";

function SingUp() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/login'); // Navegar a la ruta /about
    };

    return (<>
        <div className="container">
            <div className="background-burbuja d-flex justify-content-center">
                <img width="70%" className="conedor-centrado" src={burbujaIMG} alt="" />
            </div>
            <section className="position-relative container mt-5 z-2">
                <div className="w-90 py-5 ps-4 pe-4 formulario-desing conedor-centrado ">
                    <div className="container py-5 ps-4 pe-4">
                        <div className="d-flex mb-5">
                            <div className="pe-3">
                                <h1 className="fs-6 color-primario">Home</h1>
                            </div>
                            <div className="pe-3">
                                <h1 className="fs-6">/</h1>
                            </div>
                            <div>
                                <h1 className="fs-6">Registro</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="fs-4">Registro</h1>
                        </div>
                        <div>
                            <p>Para hacer un registro exitoso debe pertenecer a un colegio o universidad con correo corporativo de esa institucion</p>
                        </div>

                        {/* INPUT */}
                        {Object.entries(camposForm).map((campo, index) => {

                            let camposArray = campo[1];
                            return (<div className="d-lg-flex py-4 justify-content-between" key={index}>
                                {Object.entries(camposArray).map((elements, keys2) => {
                                    let element = elements[1];
                                    if (element.type == "text" || element.type == "password" || element.type == "number" || element.type == "email" || element.type == "date") {
                                        return (<Input name={element.label} type={element.type} placeholder={element.placeholder} key={keys2} />)
                                    } else if (element.type == "checkbox") {
                                        return (<Check name={element.label} active={""} values={element.values} />)
                                    }

                                })}
                            </div>)

                        })}

                    </div>
                    <div>
                        <button class="w-100 p-3" onClick={handleButtonClick}>Registrar</button>
                    </div>
                </div>

            </section>

            <footer className="container position-relative z-2 d-none d-lg-block">
                <div className="py-5 background-footer conedor-centrado">
                    <div className="d-flex justify-content-center">
                        <h1 className="text-white fs-2 fs-lg-4">&#169; 2024 Sebastian Carmona. All rights reserved</h1>
                    </div>
                </div>
            </footer>
        </div>
    </>)
}

export default SingUp;