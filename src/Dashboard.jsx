import { useNavigate } from 'react-router-dom';
import './assets/dashboard.css';
import cover from './assets/images/cover.png';
import Cards from './common/Cards/Cards';

function Dashboards(params) {
    
    
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/profesor'); // Navegar a la ruta /about
    };

    const data = {
        0: {
            "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis deserunt cum delectus distinctio iure totam fugiat error, officiis, eius sit voluptatem doloremque. Sequi molestias obcaecati provident porro blanditiis maxime?",
            "name": "Sebastian Carmona",
            "puntuation": "4.5"
        },
        1: {
            "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis deserunt cum delectus distinctio iure totam fugiat error, officiis, eius sit voluptatem doloremque. Sequi molestias obcaecati provident porro blanditiis maxime?",
            "name": "Sebastian Carmona",
            "puntuation": "4.5"
        },
        2: {
            "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis deserunt cum delectus distinctio iure totam fugiat error, officiis, eius sit voluptatem doloremque. Sequi molestias obcaecati provident porro blanditiis maxime?",
            "name": "Sebastian Carmona",
            "puntuation": "4.5"
        }
    }

    let description = "Profesor de ingeniería de sistemas en universidad. Especializado en Laravel y frontend (HTML, CSS, JS, React.js, Tailwind, Bootstrap, Vite.js). Fomenta aprendizaje práctico y habilidades tecnológicas.";
    let name = "Andres Felipe Ospino Jimenez";
    let puntuation = 4.5;
    return (
        <>
            <main className="w-100 dashboard">
                <section className='w-100 row'>
                    <div className="row col-12 col-md-8 col-lg-4 p-5 dashboard-titulo align-items-center justify-content-center">
                        <h1>
                        Busca & <br/> encuentra<br />
                        tu Tutor favorito
                        </h1>
                    </div>
                    <div className='p-5 col-12 col-md-6 col-lg-8'>
                        <div className='dashboard-cover col-12 d-lg-block d-none'>
                            <img src={cover} alt="" />
                        </div>
                        <div className='cards-principal d-flex justify-content-center'>
                            <div className='container-cards'>
                            <Cards onlclick={handleButtonClick} description={description} name={name} puntuation={puntuation} />
                            </div>
                        </div>
                    </div>
                    <div className='w-100 d-flex justify-content-between mt-5 mb-5 p-5'>
                        {Object.entries(data).map((elements, key) => {
                            let element = elements[1];
                            
                            return (
                                <div className='col-3'>
                                    <Cards description={element.description} name={element.name} puntuation={element.puntuation} key={key} />
                                </div>
                                )

                        })}
                    </div>
                </section>
            </main>
        </>
    )

}

export default Dashboards;