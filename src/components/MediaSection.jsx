import CardMedia from "./CardMedia";

function MediaSection(props) {
    const { title, items, isHeroRow } = props;

    return (
        <>

            <section className={`mediaSection ${isHeroRow ? "mediaSectionHero" : ""} `} >

                {/* Titolo sezione */}
                <h2>{title}</h2>

                {/* Lista poster */}
                <div className="containerPosterList">
                    {items.map(item => (
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
