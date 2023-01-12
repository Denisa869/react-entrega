import { useEffect, useState } from "react"
import Bomba  from './Bomba'


const Clicker = () => {
    let num = 0

    const [counter, setCounter] = useState(1)
    const [show, setShow] = useState(true)
    

    const sumar = () => {
        
        setCounter( counter + 1)
         
    }

    const restar = () => {
        if (counter > 1) {
        setCounter( counter - 1)
        }
    }

    const mostrar = () => {
        setShow( !show)
    }

    useEffect(()=> {
        if (counter === 13) console.log('#13')
    }, [counter])

    return (
        <div className="container my-5">
            <h2>Clicker</h2>
            <hr/>
            <button className="btn btn-primary" onClick={sumar}>Sumar</button>
            <button className="btn btn-outline-primary mx-3" onClick={restar}>Restar</button>
            <p>{counter}</p>

            <hr/>
            <button className="btn btn-success" onClick={mostrar}>{show ? 'Ocultar' : 'Mostrar'}</button>


            <Bomba show={show} counter={counter} />
        </div>  
    )
}


export default Clicker