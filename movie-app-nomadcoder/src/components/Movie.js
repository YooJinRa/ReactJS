import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./Movie.module.css"

function Movie({medium_cover_image, title, summary, genres, id, year}) {
    // Movie Component는 이 properies를 다 부모 component로 부터 받아옴.
    return (
        <div className={styles.movie}>
            <img className={styles.movie__img} src={medium_cover_image} alt={title} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((g) => <li key={g}>{g}</li>)}
                </ul>
            </div>
        </div>   
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired
}

export default Movie