import headerIMG from './assets/images/header.png';
import rectangleIMG from './assets/images/rectangle.png';
import fiveIMG from './assets/images/five.png';
import pbuttonIMG from './assets/images/pbutton.png';


function Encuesta() {

    return (
        <>
            <main className='mb-5'>
                <header className="profesor-header">
                    <img src={headerIMG} alt="" />
                </header>
                <div className='w-100 d-flex'>
                    <div className="p-5 side col-12 col-lg-2">
                        <div className='mb-3'>
                            <img src={rectangleIMG} alt="" width="85%" />
                        </div>
                    </div>
                    <div className="p-5 container-info col-12 col-lg-9">
                        <div className='nombre-profesor mb-5'>
                            <h1>SEBASTIAN CARMONA PUELLO</h1>
                        </div>
                    </div>
                </div>
                <div className='w-100 d-flex'>
                    <div className='p-5 container'>
                        <h1>4.5</h1>
                    </div>
                    <div className='p-5 container'>
                        <img src={fiveIMG} alt="" />
                    </div>
                </div>
                <div className='p-5 container'>
                    <div className="form-group container">
                        <label htmlFor="exampleFormControlTextarea1">Descripcion</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </div>
                <div className='p-5 container d-flex justify-content-end'>
                    <img src={pbuttonIMG} alt="" />
                </div>
            </main>
        </>
    )
}

export default Encuesta;