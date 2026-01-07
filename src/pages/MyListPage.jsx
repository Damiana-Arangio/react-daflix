import MediaGrid from '../components/MediaGrid';

function MyListPage() {

    // Debug
    const myList = [];

    return (
        <>
            <div className='myListPage'>

                {/* Titolo pagina */}
                <h1>La mia lista</h1>

                {
                    myList.length === 0 ? 
                        (
                            <div className='containerListaVuota'>
                                <p className='testoListaVuota'>Non hai aggiunto nessun titolo alla tua lista</p>
                            </div>
                        ) 
                    : 
                        (
                            <div className='containerListaPiena'>
                                <p>contenuti lista</p>
                                {/* <MediaGrid/> */}
                            </div> 
                        )
                }
                
            </div>

        </>
    )
}

export default MyListPage;
