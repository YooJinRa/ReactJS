import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"

function Detail() {
    
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();

            console.log(json)
            setMovie(json.data.movie)
            setLoading(false)
            
    }
    
    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div>
                <h1>{movie.title_long}</h1>
                <div>
                    <ul>
                    {movie.genres.map((g) => <li key={g}>{g}</li>)}
                    </ul>

                    <img src={movie.large_cover_image} alt={movie.title} />

                    <p>{movie.description_full}</p>

                    <button>
                        <Link to="/">Go back to the List of Movies</Link>
                    </button>

                </div>
            </div>
            }
        </div>
    )
}

export default Detail