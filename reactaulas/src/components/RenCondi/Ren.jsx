import { useState } from "react"

export default function Ren() {

    const [log, setLog] = useState(false)
    const [cor, setCor] = useState(1)

    const vermelho = {color: '#f00'}
    const verde = {color: '#0f0'}
    const azul = {color: '#00f'}

    const retornaCor = (c) => {
        if (c == 1) {
            return vermelho
        } else if (c == 2) {
            return verde
        } else {
            return azul
        }
    }

    const mudaCor = () => {
        setCor(cor+1)
        if (cor > 2) {
            setCor(1)
        } 
    }

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

    setInterval(mudaCor, 1000)
    
    return (
        <section>
            {cumprimento()}
            <p>{log?logado():naoLogado()}</p>
            <button onClick={() => {setLog(!log)}}>{log?'Log-Out':"Log-in"}</button>

            <h1 style={retornaCor(cor)}>Andre Matos</h1>
            <button onClick={() => {mudaCor()}}>Muda Cor</button>
        </section>
    )
}