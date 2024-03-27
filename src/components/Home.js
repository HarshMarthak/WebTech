import AboutYourShop from "./home-page/AboutYourShop";
import FeaturedProducts from "./home-page/FeaturedProducts";
import Footer from "./home-page/Footer";
import Hero from "./home-page/Hero";
import Navbar from "./home-page/Navbar";

const Home = () =>{
 return (
   <div className="container mt-5">
    <Navbar/>
    <Hero/>
    <FeaturedProducts/>
    <AboutYourShop/>
    <Footer/>
   </div>
 )
}
 export default Home;