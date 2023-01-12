import { useEffect, useState } from "react"
import './itemCount.css'



const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)
    
    const sumar = () => {
        if(counter < stock){
        setCounter( counter + 1)
        }
    }

    const restar = () => {
        if (counter > 1) {
        setCounter( counter - 1)
        }
    }

    return (
        <div className="container my-5">
            <hr/>
            <div className='btn-group buttonCounter'>
                <button className="btn btn-default" onClick={restar}>-</button><p>{counter}</p><button className="btn btn-default" onClick={sumar}>+</button>
            </div>
            

            <hr/>
            
          
        </div>  
    )
  
}

export default ItemCount