import Dados from './Dados'
import Samp from './Samp'
import Relogio from './relogio.jsx'
import './Main.css'
import Numero from './Numero.jsx'
import { useState } from 'react'

export default function Main() {

    const album = () => {
        return "Time to be Free"
    }

    const somar = (a,b) => {
        return a+b
    }

    const [num, Setnum] = useState(0)

    return (
        <main>

            <section className='meio'>
                <Relogio/>
                <h3>Escreva e não grita!</h3>
                <input type="text" name="" id="" required placeholder="Escreve legal" />
                <button>Mandar</button>
                <a href="https://github.com/DiegoZapora" target='_blank'>GitHub</a>
            </section>

            <section className='meio2'>
                <p>Valor do State App: {num}</p>
                <Numero num = {num} Setnum = {Setnum}/>
            </section>

            <Dados musica='A New Moonlight' album={album()} cantor="Andre Matos" somar={somar(15,2)} />
            <Samp nome='Andre' />
            
        </main>
    )
}