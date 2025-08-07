import Dados from './Dados'
import Samp from './Samp'

export default function Main() {

    const album = () => {
        return "Time to be Free"
    }

    const somar = (a,b) => {
        return a+b
    }

    return (
        <main>

            <section>
                <h3>Escreva e não grita!</h3>
                <input type="text" name="" id="" required placeholder="Escreve legal" />
                <button>Mandar</button>
            </section>

            <Dados musica='A New Moonlight' album={album()} cantor="Andre Matos" somar={somar(15,2)} />
            <Samp nome='Andre' />
            
        </main>
    )
}