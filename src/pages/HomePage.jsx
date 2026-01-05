import { useEffect, useState } from 'react';
import MediaSection from '../components/MediaSection';
import axios from 'axios';
import Hero from '../components/Hero';

function HomePage() {

    /***********
        HOOK
    ************/

    // Stato (Sezioni Media)
    const [filmDiTendenza, setFilmDiTendenza] = useState([]);
    const [tiAppassioneranno, setTiappassioneranno] = useState([]);
    const [serieInOndaOggi, setSerieInOndaOggi] = useState([]);
    const [tesoriPerTe, setTesoriPerTe] = useState([]);
    
    // Stato (Hero)
    const [heroItem, setHeroItem] = useState(null);

    // Effetto (Sezioni Media)
    useEffect( () => {
        fetchSection("/trending/movie/day", setFilmDiTendenza);
        fetchSection("/tv/top_rated", setTiappassioneranno);
        fetchSection("/tv/airing_today", setSerieInOndaOggi);
        fetchSection("/movie/top_rated", setTesoriPerTe);
    }, [] );

    // Effetto (Hero)
    useEffect(() => {

        // Recupera il primo film di tendenza e aggiorno lo stato
        if (filmDiTendenza.length > 0) {
            setHeroItem(filmDiTendenza[8]);
        }
    }, [filmDiTendenza]);

    // Debug
    useEffect(() => {
        console.log("Primo film di tendenza per hero:", heroItem);
    }, [heroItem]);


    /**************
        COSTANTI
    ***************/

    // Sezioni home
    const homeSections = [
        { id: 1, title: "Film di tendenza", items: filmDiTendenza}, 
        { id: 2, title: "Pensiamo ti appassioneranno", items: tiAppassioneranno }, 
        { id: 3, title: "Serie tv in onda oggi", items: serieInOndaOggi }, 
        { id: 4, title: "Tesori per te", items: tesoriPerTe }, 
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
                />
            )}
            
            {/* Sezione Media */}
            {homeSections.map( section => (
                <MediaSection
                    key = {section.id}
                    title={section.title}
                    items={section.items}
                />
            ))}
        </>
    )

    /**************
        FUNZIONI
    ***************/
    // Funzione che recupera una lista di contenuti da TMDB in base all'endpoint specificato
    function fetchSection(endpoint, setState) {

        const url = `${API_URL}${endpoint}?api_key=${API_KEY}&language=it-IT&page=1`;

        axios.get(url)
            .then(res => setState(res.data.results))
            .catch(err => console.error("Errore chiamata API", err))
    };

}

export default HomePage;