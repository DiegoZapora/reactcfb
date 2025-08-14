import Relogio from './relogio.jsx'
import './Main.css'

export default function Main() {

    return (
        <main>

            <section className='meio'>
                <Relogio/>
                <h3>Escreva e não grita!</h3>
                <input type="text" name="" id="" required placeholder="Escreve legal" />
                <button>Mandar</button>
                <a href="https://github.com/DiegoZapora" target='_blank'>GitHub</a>
            </section>
            
        </main>
    )
}