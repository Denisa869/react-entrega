import './ItemListContainer.css'

export const ItemListContainer = ({greetings}) => {

    console.log(greetings)
    return (
        <h1 className="itemColor">{greetings}</h1>
    )
}