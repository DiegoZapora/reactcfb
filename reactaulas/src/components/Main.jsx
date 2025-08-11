import Dados from './Dados'
import Samp from './Samp'
import Relogio from './relogio.jsx'
import './Main.css'

export default function Main() {

    const album = () => {
        return "Time to be Free"
    }

    const somar = (a,b) => {
        return a+b
    }

    return (
        <main>

            <section className='meio'>
                <Relogio/>
                <h3>Escreva e não grita!</h3>
                <input type="text" name="" id="" required placeholder="Escreve legal" />
                <button>Mandar</button>
                <a href="https://github.com/DiegoZapora" target='_blank'>GitHub</a>
            </section>

            <Dados musica='A New Moonlight' album={album()} cantor="Andre Matos" somar={somar(15,2)} />
            <Samp nome='Andre' />
            
        </main>
    )
}