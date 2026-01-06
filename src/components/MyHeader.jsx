
import Navbar from "./Navbar";
import Searchbar from "./Searchbar"

function MyHeader() {
    return (
        <>
                <div className="myHeader">

                    <div className="flex-row headerLeft">

                        {/* Logo */}
                        <img src="/logo.png" alt="logo" className="logo" />

                        {/* Link di navigazione */}
                        <Navbar />
                    </div>

                    <div className="flex-row headerRight">
                        {/* Barra di ricerca */}
                        <Searchbar />

                        {/* Profilo */}
                        <p>Icona profilo</p>
                    </div>
                </div>
        </>
    )
}

export default MyHeader;
