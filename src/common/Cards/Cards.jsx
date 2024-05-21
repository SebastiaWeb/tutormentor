import holder from '../../assets/images/holder.png'
function Cards({description, name, puntuation, onlclick}) {

    return (
        <>
            <div className="card p-3" onClick={onlclick}>
                <img className="card-img-top" src={holder} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <p>
                        {puntuation}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cards;