function Hero(props) {

    const { title, poster } = props;
    const basePathImage = "https://image.tmdb.org/t/p/original";

    return(

        
        <section className="heroSection">

            {/* Titolo Hero + logo */}
            <div className="containerLogoTitle">
                <img src="/logo.png" alt="logo" className="logo" />
                <h1 className="heroTitle"> {title.toUpperCase()} </h1>
            </div>


            {/* Immagine Hero */}
                <img src={basePathImage + poster} alt={title} />
            
        </section>
    )
}

export default Hero;