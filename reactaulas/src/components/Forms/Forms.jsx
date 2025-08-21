import { useState } from "react"

export default function Forms() {

    const [nome, setNome] = useState("")
    return (
        <section>
            Digite seu nome: <input type="text" name="fNome" id="fNome" value={nome}onChange={(e) => setNome(e.target.value)}  />
            <p>Nome digitado: {nome}</p>
        </section>
    )
}