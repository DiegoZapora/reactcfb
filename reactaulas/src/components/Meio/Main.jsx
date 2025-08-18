import Relogio from './relogio.jsx'
import './Main.css'

export default function Main() {

    const escreve = () => {
        let samp = document.getElementById("samp")
        let sas = document.getElementById("sas")

        sas.innerHTML = samp.value
    }  

    return (
        <main>

            <section className='meio'>
                <Relogio/>
                <h3>Escreva e não grita!</h3>
                <input type="text" id='samp' required placeholder="Escreve legal" />
                <button onClick={escreve} type="submit">Escrever</button>
                <p id='sas'></p>
                <a href="https://github.com/DiegoZapora" target='_blank'>GitHub</a>
            </section>
            
        </main>
    )
}