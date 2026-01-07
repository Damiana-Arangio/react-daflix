import { useEffect, useState } from 'react';
import MediaSection from '../components/MediaSection';
import axios from 'axios';
import Hero from '../components/Hero';

function SerieTvPage() {

    /***********
      HOOK
  ************/

    // Stato (Sezioni Media)
    const [serieAzioneAvventura, setserieAzioneAvventura] = useState([]);
    const [serieDrammatiche, setSerieDrammatiche] = useState([]);
    const [serieRagazzi, setSerieRagazzi] = useState([]);
    const [serieFamiglia, setSerieFamiglia] = useState([]);

    // Stato (Hero)
    const [heroItem, setHeroItem] = useState(null);
    console.log(heroItem);

    // Effetto (Sezioni Media)
    useEffect(() => {
        fetchSection(10759, setserieAzioneAvventura);
        fetchSection(18, setSerieDrammatiche);
        fetchSection(10762, setSerieRagazzi);
        fetchSection(10751, setSerieFamiglia);
    }, []);

    // Effetto (Hero)
    useEffect(() => {

        // Selezione casuale di una serie (Azione & Avventura) da mostrare nell'hero
        if (serieAzioneAvventura?.length > 0) {
            const randomIndex = Math.floor(Math.random() * serieAzioneAvventura.length);
            setHeroItem(serieAzioneAvventura[randomIndex]);
         }
    }, [serieAzioneAvventura]);

    // Debug
    useEffect(() => {
         console.log("Serie casuale (azione e avventura) per hero:", heroItem);
     }, [heroItem]);


    /**************
        COSTANTI
    ***************/

    // Sezioni Serie tv
    const serieTvSections = [
        { id: 1, title: "Azione & Avventura", items: serieAzioneAvventura , isHeroRow: true },
        { id: 2, title: "Drammi TV emozionanti", items: serieDrammatiche, isHeroRow: false },
        { id: 3, title: "Da guardare con i ragazzi", items: serieRagazzi, isHeroRow: false },
        { id: 4, title: "Classici familiari ", items: serieFamiglia, isHeroRow: false },
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
                        title={heroItem.name}
                        poster={heroItem.backdrop_path}
                        overview={heroItem.overview}
                    />
                )}

                {/* Sezione Media */}
                {serieTvSections?.map(serieTvSection => (
                    <MediaSection
                        key={serieTvSection.id}
                        title={serieTvSection.title}
                        items={serieTvSection.items}
                        isHeroRow={serieTvSection.isHeroRow}

                    />
                ))}
            </>
    )

    /**************
       FUNZIONI
   ***************/
    // Funzione che recupera una lista di contenuti da TMDB in base al genere specificato
    function fetchSection(id_genres, setState) {

        const url = `${API_URL}/discover/tv?api_key=${API_KEY}&language=it-IT&with_genres=${id_genres}`;

        axios.get(url)
            .then(res => {
                setState(res.data.results)

                // Debug
                console.log("Lista generi: ", res.data.results)})

            .catch(err => console.error("Errore chiamata API", err))
    };
}

export default SerieTvPage;

