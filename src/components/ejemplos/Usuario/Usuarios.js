import './Usuario.css'
import {Button} from 'react-bootstrap'

export const Usuarios = ( {nombre, curso, edad} ) => {


    return (
        <div  className="usuario">
            <h2>Nombre:{nombre}</h2>
            <p>Cursando: <strong>{curso}</strong></p>
            <p>Edad: {edad}</p>

            <Button>Clickeame!</Button>
        </div>
    )
} 