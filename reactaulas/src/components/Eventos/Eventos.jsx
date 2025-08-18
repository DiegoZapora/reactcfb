import { useState } from 'react'
import Andre from './300.png'
import Aurora from './aurora.jpg'

export default function Eventos() {

    const container2 = {
        backgroundColor: 'white',
        width: 'calc(100vw - 100)',
        height: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'space-evenly',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        color: 'red',
        margin: '10px',
        borderRadius: '10px',
    }

    const [imagem, setImagem] = useState(false)

    const mudar = () => {
        setImagem(!imagem)
    }

    return (
        <section style={container2}>
            <img src={imagem?Aurora:Andre} style={{width: '150px', borderRadius: '10px'}} />

            <button onClick={mudar}>{imagem?'Andre':'Aurora'}</button>
        </section>
    )

}