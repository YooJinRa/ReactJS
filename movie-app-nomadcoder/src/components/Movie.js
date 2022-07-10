import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Movie({medium_cover_image, title, summary, genres, id}) {
    // Movie Component는 이 properies를 다 부모 component로 부터 받아옴.
    return (
        <div>
        <img src={medium_cover_image} alt={title} />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
        </div>   
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie