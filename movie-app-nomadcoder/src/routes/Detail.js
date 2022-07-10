import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"
import styles from "./Detail.module.css"

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
        <div className={styles.detail__container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : <div className={styles.movie}>
                    <h1 className={styles.movie__title}>{movie.title_long}</h1>
                    
                    <ul className={styles.movie__genres}>
                        {movie.genres.map((g) => <li key={g}>{g}</li>)}
                    </ul>

                    <img className={styles.movie__image} src={movie.large_cover_image} alt={movie.title} />

                    <p className={styles.movie__desc}>{movie.description_full}</p>

                    <button className={styles.btn__home}>
                        <Link to="/">Go back to the List of Movies</Link>
                    </button>

                
            </div>
            }
        </div>
    )
}

export default Detail