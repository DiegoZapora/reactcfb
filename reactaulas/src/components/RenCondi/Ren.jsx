import { useState } from "react"

export default function Ren() {

    const [log, setLog] = useState(false)

    const logado = () => {
        return 'Usuario Logado'
    }

    const naoLogado = () => {
        return 'Favor Logar'
    }


    const cumprimento = () => {
        let hora = new Date().getHours()
        if (hora >= 0 && hora < 12) {
            return <p>Bom dia</p>
        } else if (hora > 12 && hora <= 18) {
            return <p>Boa Tarde</p>
        } else {
            return <p>Boa noite</p>
        }
    }
    
    return (
        <section>
            {cumprimento()}
            <p>{log?logado():naoLogado()}</p>
            <button onClick={() => {setLog(!log)}}>{log?'Log-Out':"Log-in"}</button>
        </section>
    )
}