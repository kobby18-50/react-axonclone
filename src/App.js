import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Products from "./Pages/Products"
import Services from "./Pages/Services"
import Portfolio from "./Pages/Portfolio"
import OurCompany from "./Pages/OurCompany"
import AboutUs from "./Pages/AboutUs"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";



function App() {
  return (
   <div>


    {/* Routes */}

      <NavBar/>
    <Routes>
      <Route path={'/'} element={<Homepage/>} />
      <Route path={'/products'} element = {<Products/>} />
      <Route path={'/services'} element = {<Services/>} />
      <Route path={'/portfolio'} element = {<Portfolio/>} />
      <Route path={'/company'} element = {<OurCompany/>} />
      <Route path={'/about-us'} element = {<AboutUs/>} />
      <Route path={'/contact-us'} element = {<Contact/>} />

    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
