import { useEffect, useState } from 'react';
import MediaSection from '../components/MediaSection';
import axios from 'axios';

function HomePage() {

    /**************
        COSTANTI
    ***************/
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    /***********
        HOOK
    ************/
    const [FilmDiTendenza, setFilmDiTendenza] = useState([]);
    const [tiAppassioneranno, setTiappassioneranno] = useState([]);
    const [serieInOndaOggi, setSerieInOndaOggi] = useState([]);
    const [tesoriPerTe, setTesoriPerTe] = useState([]);
    
    useEffect( () => {
        fetchFilmDiTendenza();
        fetchTiAppassioneranno();
        fetchSerieInOndaOggi();
        fetchTesoriPerTe();
    }, [] );

    /**************
        RENDERING
    **************/
    return (
        <>
            
            <MediaSection
                title="Film di tendenza"
                items={FilmDiTendenza}
            />

            <MediaSection
                title="Pensiamo ti appassioneranno"
                items={tiAppassioneranno}
            />

            <MediaSection
                title="Serie tv in onda oggi"
                items={serieInOndaOggi}
            />

            <MediaSection
                title="Tesori per te"
                items={tesoriPerTe}
            />
        </>
    )

    /**************
        FUNZIONI
    ***************/
    function fetchFilmDiTendenza() {

        const url = `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=it-IT`;

        axios.get(url)
            .then(res => {
                console.log("API film di tendenza", res.data.results);

                setFilmDiTendenza(res.data.results);
            })
            .catch(err => {
                console.error("Errore chiamata API", err);
            });
    };

    function fetchTiAppassioneranno() {

        const url = `${API_URL}/tv/top_rated?api_key=${API_KEY}&language=it-IT&page=1`;

        axios.get(url)
            .then(res => {
                console.log("API TI APPASSIONERANNO:", res.data.results);

                setTiappassioneranno(res.data.results);
            })
            .catch(err => {
                console.error("Errore chiamata API", err);
            });
    }

    function fetchSerieInOndaOggi() {

        const url = `${API_URL}/tv/airing_today?api_key=${API_KEY}&language=it-IT&page=1`;

        axios.get(url)
            .then(res => {
                console.log("RISPOSTA API serie tv in onda oggi:", res.data.results);

                setSerieInOndaOggi(res.data.results);
            })
            .catch(err => {
                console.error("Errore chiamata API", err);
            });
    }

    function fetchTesoriPerTe() {

        const url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=it-IT&page=1`;

        axios.get(url)
            .then(res => {
                console.log("RISPOSTA API tesori per te:", res.data.results);

                setTesoriPerTe(res.data.results);
            })
            .catch(err => {
                console.error("Errore chiamata API", err);
            });
    }

}

export default HomePage;