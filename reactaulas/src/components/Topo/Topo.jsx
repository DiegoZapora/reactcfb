const container = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto',
    height: 'auto'
}

const destaque = {
    color: 'blue',
    fontSize: "1.7em",
    fontWeight: 'normal',
}

export default function Header() {
    return (
        <header>
            <section style={container}>
                <h1 style={{color: 'red', fontFamily: 'Arial', fontSize: '2em'}}>Andre Matos</h1>
                <h2>Maestro do Heavy Metal</h2>
            </section>
        </header>
    )
}