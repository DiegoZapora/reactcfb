import { useState } from "react"


export default function State() {

    const [count, setCount] = useState(0)

    const maisUm = () => {
        setCount(count + 1)
    }

    return (
        <section className="dados">
            <div>
                <p>Você clicou {count} vezes.</p>

                <button onClick={maisUm}>Mais Um</button>
            </div>
        </section>
    )
}