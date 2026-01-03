import CardMedia from "./CardMedia";

function MediaSection(props) {
    const { title, items } = props;

    return (
        <>

            <section className="mediaSection">

                {/* Titolo sezione */}
                <h2>{title}</h2>

                {/* Lista poster */}
                <div>
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
