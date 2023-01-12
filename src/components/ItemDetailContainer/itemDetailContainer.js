import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirItemPorId } from '../helpers/pedirDatos'
import  Card2  from '../Card/Card2'

const ItemDetailContainer = () => {


    const [item, setItem] = useState(null)


    const { itemId } = useParams()

    useEffect(() => {
        pedirItemPorId(Number(itemId))
        .then((data) => {
            setItem(data)
        })

    }, [itemId])

    return (
        <div className='container my-5'>
            {
              item && <Card2 item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer