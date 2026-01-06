function Hero(props) {

    const { title, poster, overview } = props;
    const basePathImage = "https://image.tmdb.org/t/p/original";

    return(

        <section className="heroSection">

            {/* Titolo Hero + logo */}
            <div className="containerLogoTitle">
                <img src="/logo.png" alt="logo" className="heroLogo" />
                <h1 className="heroTitle"> {title.toUpperCase()} </h1>
                <p> {overview} </p>
            </div>


            {/* Immagine Hero */}
                <img src={basePathImage + poster} alt={title} />
            
        </section>
    )
}

export default Hero;