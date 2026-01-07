import { useEffect, useState } from 'react';
import MediaSection from '../components/MediaSection';
import axios from 'axios';
import Hero from '../components/Hero';


function NewsPopularsPage() {

     /***********
            HOOK
        ************/
    
        // Stato (Sezioni Media)
        const [serieInArrivo, setSerieInArrivo] = useState([]);
        const [filmPiuPopolari, setFilmPiuPopolari] = useState([]);
        const [serieTvPiuPopolari, setSerieTvPiuPopolari] = useState([]);
        const [prossimeUscite, setProssimeUscite] = useState([]);

        // Effetto (Sezioni Media)
        useEffect( () => {
            fetchSection("/tv/on_the_air", setSerieInArrivo);
            fetchSection("/movie/popular", setFilmPiuPopolari);
            fetchSection("/tv/popular", setSerieTvPiuPopolari);
            fetchSection("/movie/upcoming", setProssimeUscite);
        }, [] );
    
    
        /**************
            COSTANTI
        ***************/
    
        // Sezioni home
        const newsPopularsSections = [
            { id: 1, title: "Serie tv in onda nei prossimi 7 giorni ", items: serieInArrivo, isFirstNewsPopularsPage: true},
            { id: 2, title: "Film più popolari", items: filmPiuPopolari}, 
            { id: 3, title: "Serie tv più popolari", items: serieTvPiuPopolari }, 
            { id: 4, title: "Prossime uscite", items: prossimeUscite}
        ]
    
        // Chiamate API
        const API_URL = import.meta.env.VITE_API_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;
    
    /**************
        RENDERING
    **************/    
   return (
       <>

           {/* Sezione Media */}
           {newsPopularsSections.map(newsPopularsSection => (
               <MediaSection
                   key={newsPopularsSection.id}
                   title={newsPopularsSection.title}
                   items={newsPopularsSection.items}
                   isFirstNewsPopularsPage={newsPopularsSection.isFirstNewsPopularsPage}
               />
           ))}
       </>
    )

    /**************
        FUNZIONI
    ***************/
    // Funzione che recupera una lista di contenuti da TMDB in base all'endpoint specificato
    function fetchSection(endpoint, setState) {

        const url = `${API_URL}${endpoint}?api_key=${API_KEY}&language=it-IT`;

        axios.get(url)
            .then(res => setState(res.data.results))
            .catch(err => console.error("Errore chiamata API", err))
    };
}

export default NewsPopularsPage;



