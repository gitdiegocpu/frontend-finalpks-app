import Navbar from "../Navbar/Navbar";
import Bannner from "../Bannner/Bannner";
import Products from "../Products/Products";


const Home = () => {
    return (
        <> 
           <Navbar />
           <Bannner />
           <div className='product-card-container'> 
           <Products />
           </div>
        </>
        
    )
};
export default Home; 