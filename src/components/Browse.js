import Header from "./Header"
import Maincontainer from "./Maincontainer"
import useNowPlaying from "../hooks/useNowPlaying"
import Secondarycontainer from "./Secondarycontainer";
import Footer from "./Footer";
const Browse=()=>
{
    useNowPlaying();
    return(
        <div className="absolute bg-black">
            <Header />
            <Maincontainer />
            <Secondarycontainer />
            <Footer />
        </div>
    )
}
export default Browse