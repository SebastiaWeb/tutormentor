function Input({name, placeholder, type, col}) {
    return (<>
        <div className={"col-lg-5 "+col}>
            <div>
                <h1 className="fs-4">{name}</h1>
            </div>
            <div><input type={type} placeholder={"Ej:"+placeholder} className="w-100 p-2"></input></div>
        </div>
    </>)
}

export default Input;