import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout;