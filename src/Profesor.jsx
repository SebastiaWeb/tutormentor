import headerIMG from './assets/images/header.png';
import rectangleIMG from './assets/images/rectangle.png';
import january from './assets/images/january.png';
import list from './assets/images/list.png';
import list1 from './assets/images/list1.png';
import list2 from './assets/images/list2.png';
import button from './assets/images/button.png';
import './assets/profesor.css'
import { useNavigate } from 'react-router-dom';

function Profesor() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/encuesta'); // Navegar a la ruta /about
    };

    return (
        <>
            <main className='mb-5'>
                <header className="profesor-header">
                    <img src={headerIMG} alt="" />
                </header>
                <div className='w-100 d-flex'>
                    <div className="p-5 side col-12 col-lg-2">
                        <div className='mb-3'>
                            <img src={rectangleIMG} alt="" width="55%" />
                        </div>
                        <div>
                            <h6 className='color-title'>Telefono</h6>
                            <p>000-000-0000</p>
                        </div>
                        <div>
                            <h6 className='color-title'>Correo</h6>
                            <p>template@unisinu.edu.co</p>
                        </div>
                        <div>
                            <h6 className='color-title'>Pais</h6>
                            <p>Colombia</p>
                        </div>
                        <div>
                            <h6 className='color-title'>Ciudad</h6>
                            <p>Cartagena</p>
                        </div>
                    </div>
                    <div className="p-5 container-info col-12 col-lg-9">
                        <div className='nombre-profesor mb-5'>
                            <h1>SEBASTIAN CARMONA PUELLO</h1>
                        </div>
                        <div className='w-100 col-12 d-flex justify-content-between'>
                            <div className='col-4'>
                                <div>
                                    <h6 className='color-title'>Calificacion</h6>
                                    <p>4.5</p>
                                </div>
                                <div className='mt-5'>
                                    <h6 className='color-title'>💼 Especializacion:</h6>
                                    <p>
                                        <ul>
                                            <li>Backend Development</li>
                                            <li>Frontend Development</li>
                                            <li>UI/UX Design [Website]</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div>
                                    <h6 className='color-title'>School</h6>
                                    <p>Universidad del Sinú</p>
                                </div>
                                <div className='mt-5'>
                                    <h6 className='color-title'>⚡️ Habilidades:</h6>
                                    <p>
                                        <ul>
                                            <li>Backend Development: Laravel</li>
                                            <li>Frontend Development: HTML, CSS, JS, React.js, Tailwind, Bootstrap, Vite.js</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div>
                                    <h6 className='color-title'>Area</h6>
                                    <p>Ingenieria de sistemas</p>
                                </div>
                                <div className='mt-5'>
                                    <h6 className='color-title'>🛠 Herramientas:</h6>
                                    <p>
                                        <ul>
                                            <li>Prototyping: Figma</li>
                                            <li>Project Management: Jira, Trello, Asana, etc</li>
                                            <li>Database Schema: Draw.io</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 d-flex'>
                            <div className='w-50 p-5 '>
                                <img src={january} alt="" />
                            </div>
                            <div className='w-50 p-5 lsit'>
                                <img src={list} width='30%' alt=""  className='mb-3'/>
                                <img src={list1} width='30%' alt="" className='mb-3'/>
                                <img src={list2} width='30%' alt="" className='mb-3'/>
                                <img src={button} width='30%' alt="" className='mb-3' onClick={handleButtonClick}/>
                            </div>
                        </div>
                        <div>
                            <h6 className='color-title'>Sitio:</h6>
                            <p>Salon 308, universidad del sinu</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Profesor;