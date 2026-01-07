import { useEffect, useState } from 'react';
import MediaSection from '../components/MediaSection';
import axios from 'axios';
import Hero from '../components/Hero';


function FilmsPage() {

    /***********
        HOOK
    ************/

    // Stato (Sezioni Media)
    const [filmAmore, setFilmAmore] = useState([]);
    const [filmHorror, setFilmHorror] = useState([]);
    const [filmAzione, setFilmAzione] = useState([]);
    const [filmWestern, setFilmWestern] = useState([]);

    // Stato (Hero)
    const [heroItem, setHeroItem] = useState(null);

    // Effetto (Sezioni Media)
    useEffect(() => {
        fetchSection(10749, setFilmAmore);
        fetchSection(27, setFilmHorror);
        fetchSection(28, setFilmAzione);
        fetchSection(37, setFilmWestern);
    }, []);

    // Effetto (Hero)
    useEffect(() => {

        // Selezione casuale di un film d'amore da mostrare nell'hero
        if (filmAmore?.length > 0) {
            const randomIndex = Math.floor(Math.random() * filmAmore.length);
            setHeroItem(filmAmore[randomIndex]);
        }
    }, [filmAmore]);


    /**************
        COSTANTI
    ***************/

    // Sezioni Film
    const filmSections = [
        { id: 1, title: "Film d'amore", items: filmAmore, isHeroRow: true },
        { id: 2, title: "Horror", items: filmHorror, isHeroRow: false },
        { id: 3, title: "Film d'azione", items: filmAzione, isHeroRow: false },
        { id: 4, title: "Film Western ", items: filmWestern, isHeroRow: false },
    ]

    // Chiamate API
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;


    /**************
        RENDERING
    **************/
    return (

        <>
            {/* Sezione Hero */}
            {heroItem && (
                <Hero
                    title={heroItem.title}
                    poster={heroItem.backdrop_path}
                    overview={heroItem.overview}
                />
            )}

            {/* Sezione Media */}
            {filmSections?.map(filmSection => (
                <MediaSection
                    key={filmSection.id}
                    title={filmSection.title}
                    items={filmSection.items}
                    isHeroRow={filmSection.isHeroRow}

                />
            ))}
        </>
    )

    /**************
       FUNZIONI
    ***************/
    // Funzione che recupera una lista di contenuti da TMDB in base al genere specificato
    function fetchSection(id_genres, setState) {

        const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=it-IT&with_genres=${id_genres}`;

        axios.get(url)
            .then(res => setState(res.data.results))

            .catch(err => console.error("Errore chiamata API", err))
    };
}

export default FilmsPage;
