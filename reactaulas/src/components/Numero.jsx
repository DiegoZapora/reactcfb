export default function Numero(props) {

    return (
        <section>
            <p>Valor do state Numero: {props.num}</p>
            <button onClick={() => props.Setnum(props.num+10)}>Show</button>
        </section>
    )
}