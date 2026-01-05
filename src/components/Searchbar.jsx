
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

function Searchbar() {

    /**********
        HOOK
    ***********/

    const [isOpen, setIsOpen] = useState(false);    // Stato che gestisce l'apertura/chiusura della searchbar
    const [query, setQuery] = useState("")          // Stato che gestisce il valore dell'input della searchbar

    // Debug
    console.log(isOpen);
    console.log(query); 

    return (

        <form onSubmit={handleSubmit} className= {isOpen ? "searchbar" : ""}>

            {/* Icona ricerca */}
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={openSearchbar} className="iconSearch" />

            {/* Campo di input visibile solo quando la searchbar è aperta */}
            {isOpen && (
                <input 
                    type="text" 
                    value={query}
                    placeholder="Titolo, persone, generi"
                    onChange={handleChange}
                    className="input"
                />
            )}
            
        </form>
    )


    /**************
        FUNZIONI
    **************/

    // Funzione che cambia lo stato della searchbar (chiusa/aperta)
    function openSearchbar() {
        setIsOpen(isOpen => !isOpen);
    }

    // Funzione che blocca l'invio automatico del form
    function handleSubmit(e) {
        e.preventDefault();     // Blocca invio form
        setQuery("");
    }

    // Funziona che aggiorna il valore dell'input di ricerca
    function handleChange(e) {
        setQuery(e.target.value)
    }
}

export default Searchbar;
