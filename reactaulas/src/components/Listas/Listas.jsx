export default function Listas() {

    const musicas = [
        {musica: "Mentalize", album: "Mentalize", cantor: "Andre Matos"},
        {musica: "Holy Land", album: "Holy Land", cantor: "Andre Matos"},
        {musica: "Time to be Free", album: "Time to be Free", cantor: "Andre Matos"},
        {musica: "Reason", album: "Reason", cantor: "Andre Matos"}
    ]

    let musciasJSON = musicas.map((e) => 
        <p>Musica: {e.musica}, Album: {e.album}, Cantor: {e.cantor}</p>,
    )

    return (
        <section>
            {musciasJSON}
        </section>
    )
}