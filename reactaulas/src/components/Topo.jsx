const destaque = {
    color: 'blue',
    fontSize: "1.7em",
    fontWeight: 'normal'
}

export default function Header() {
    return (
        <header>
            <section>
                <h1 style={{color: 'red', fontFamily: 'Arial', fontSize: '2em'}}>Andre Matos</h1>
                <h2 style={destaque}>Maestro do Heavy Metal</h2>
            </section>
        </header>
    )
}