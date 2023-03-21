import Hero from "../components/Hero";
import PortfolioComponent from "../components/PortfolioComponent";
import ProductComponent from "../components/ProductsComponent";



const Homepage = () => {
    return ( 
        <div>            
            <Hero/>

            <ProductComponent/>

            <PortfolioComponent/>
          
        </div>
     );
}
 
export default Homepage;