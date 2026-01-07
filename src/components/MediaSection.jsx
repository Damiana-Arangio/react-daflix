import CardMedia from "./CardMedia";

function MediaSection(props) {
    
    const { title, items, isHeroRow, isFirstNewsPopularsPage } = props;

    return (
        <>

            <section className={`mediaSection ${isHeroRow ? "mediaSectionHero" : ""} ${isFirstNewsPopularsPage ? "firstSectionNewsPopulars" : ""}`} >

                {/* Titolo sezione */}
                <h2>{title}</h2>

                {/* Lista poster */}
                <div className="containerPosterList">
                    {items?.map(item => (
                            <CardMedia
                                key={item.id}
                                item={item}
                            />
                    ))}
                </div>
            </section>

        </>
    )
}

export default MediaSection;
