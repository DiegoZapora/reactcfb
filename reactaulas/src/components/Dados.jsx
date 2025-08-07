export default function Dados(props) {
    return (
        <section>
            <p>Album: {props.album}</p>
            <p>Musica: {props.musica}</p>
            <p>Cantor: {props.cantor}</p>
            <p>Soma: {props.somar}</p>
        </section>
    )
}