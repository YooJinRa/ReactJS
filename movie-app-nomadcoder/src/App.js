import {useState, useEffect} from "react"

function App() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    // 긴 버전
    // const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    // const json = await response.json()

    // 짧은 버전
    const json = await(
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json()

    setMovies(json.data.movies)
    setLoading(false)
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
   <div>
    {loading ? <h1>Loading...</h1> : <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      ))}
    </div>}
   </div>
  );
}

export default App;
