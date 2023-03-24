import Footer from "./footer";
import Beranda from "./beranda";
import Content1 from "./conten1";
import Nav from "./nav";

const Home = () => {
    return ( 
        <div>
            <Nav />
            <Beranda />
            <Content1 />
            <Footer />
        </div>
     );
}
 
export default Home;