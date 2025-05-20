import { useState, useEffect } from "react"
import "./AnimeApi.css"
import NavBar from "../components/NavBar"


 function AnimeApi() {
    const [animeList, SetAnimeList] = useState([])
    const [TopAnime, SetTopAnime] = useState([])
    const [Search, SetSearch] = useState("")

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/top/anime")
        .then((res) => res.json())
        .then((data) => {
            SetTopAnime(data.data.slice(0,10))
        })
    }, [])


const handleSearch = (e) =>{
    e.preventDefault()
    if (Search.trim()==="") return

    fetch(`https://api.jikan.moe/v4/anime?q=${Search}&limit=10`)
    .then((res) => res.json())
    .then((data) => {
        SetAnimeList(data.data)
    })
}

    return (
    <div>
            <NavBar/>
            <h1>Page Anime API</h1>
        

        <form onSubmit={handleSearch}>
            <input 
            type="search"
            placeholder="Rechercher un anime.."
            value={Search}
            onChange={(e) => SetSearch(e.target.value)}
            />
            <button type="submit"> Rechercher</button>
        </form>

        <h2>Résultat :</h2>
        <div className="resultat-danime">
           {animeList.length > 0 &&
           animeList.map((anime) => ( 
            <div key={anime.mal_id} className="anime-card">
                <img src={anime.images.jpg.image_url} alt={anime.title} />
                <h3>{anime.title}</h3>
            </div>
           ))}
        </div>
    

    <h2>Top Anime</h2>
    <div className="anime-grid">
        {TopAnime.length > 0 && 
        TopAnime.slice(0,12).map((anime) => (
        <div key={anime.mal_id} className="anime-card">
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <h3><strong>{anime.title}</strong></h3>
             </div>
            ))
            }
        
    </div>
    </div>
    )
    
}
export default AnimeApi