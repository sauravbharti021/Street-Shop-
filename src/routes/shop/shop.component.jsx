import { useContext } from "react";
import { ProductContext } from "../../context/products.context";
import ProductCard from "../../Components/products-card/products-card.component";

import '../shop/shop.style.scss'

const Shop =() =>{

    const {products} =useContext(ProductContext);
    return (
        <div className="products-container">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} />  
            ))}
        </div>
    )
}

export default Shop;