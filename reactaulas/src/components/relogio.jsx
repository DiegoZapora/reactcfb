export default function Relogio() {
    const samp = () => {
        const data = new Date()
        let hora = data.getHours()
        hora = hora < 10 ? "0" + hora : hora
    
        let minutos = data.getMinutes()
        minutos = minutos < 10 ? "0" + minutos : minutos

        let segundos = data.getSeconds()
        segundos = segundos < 10 ? "0" + segundos : segundos

        const tempo = `${hora}:${minutos}:${segundos}`

        return tempo
    }
    const intervalo = setInterval(samp, 1000)  
    return (
        <p>
            {intervalo}
        </p>
    )
}