
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar"

function MyHeader() {
    return (
        <>
            <div className="myHeader">

                <div className="flex-row">
                    {/* Logo */}
                    <img src="/logo.png" alt="logo" className="logo" />

                    {/* Link di navigazione */}
                    <Navbar />
                </div>

                <div className="flex-row">
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
