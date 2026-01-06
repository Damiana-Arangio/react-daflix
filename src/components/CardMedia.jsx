
function CardMedia(props) {

    const { item } = props;
    const basePathImage = "https://image.tmdb.org/t/p/w92/"

    return (

        <article>

            {/* Poster */}
            <img 
                className="imgPoster"
                src={basePathImage + item.poster_path} 
                alt={item.title || item.name || item.original_title || item.original_name} />

        </article>
        
    )
}

export default CardMedia;
