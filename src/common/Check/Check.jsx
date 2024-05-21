function Check({ name, active, values }) {

    return (
        <>
            <div className="d-flex align-items-center col-lg-5">
                <div className="col-1">
                    <h1 className="fs-4">{name}</h1>
                </div>
                <div className="d-flex justify-content-evenly col">
                {Object.entries(values).map((elements, keys2) => {
                    if (elements != null) {
                        return (
                            <div>
                                <div className="pe-4 ">
                                    <input type="radio" value={keys2}></input>
                                </div>
                                <div><p>{elements[1]}</p></div>

                            </div>
                        )
                    }
                })}
                </div>
            </div>


        </>
    )

}

export default Check;