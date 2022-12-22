

export const MiComponente = ({ titulo, text, tel}) => {
    // const { titulo, text, tel } = props

    return (
        <div>
            <h2>{ titulo }</h2>
            <p>{ text }</p>
            <small>{ tel }</small>
            <hr/>
        </div>
    )
} 