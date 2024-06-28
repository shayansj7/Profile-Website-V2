import NavBar from "./navBar";
import { Bottom } from "./bottom";

export default function Layout({children}){
    return(
        <>
            <NavBar></NavBar>
                {children}
            <Bottom></Bottom>
        </>
    )
}