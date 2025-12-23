import { Outlet } from "react-router-dom";

function OnboardingLayout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default OnboardingLayout;