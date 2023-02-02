import { Link } from "react-router-dom" 

const Item = ( {src, desc, price, category, id, name} )

return (
    <div className="col-3 m3">
        <img src={"src"} alt={name}/>
        <h4>{name}</h4>
        <p>Precio: <b> {new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD'}).format(price)}</b></p>
        <small>Categoría: {category}</small>
        <link to={`/detail/${id}`} className="btn btn-outline-primary">Ver más</link>
    </div>
)
export default Item

