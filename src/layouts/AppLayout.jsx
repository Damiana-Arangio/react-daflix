import { Outlet } from "react-router-dom";
import MyHeader from "../components/MyHeader/MyHeader";
import MyFooter from "../components/MyFooter";

function AppLayout() {
    return(
        <>
            <header>
                <MyHeader />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <MyFooter />
            </footer>
        </>
    )
}

export default AppLayout;