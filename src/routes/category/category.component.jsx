import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';

import '../category/category.style.scss'
import ProductCard from '../../Components/products-card/products-card.component';

const Category = () =>{

    const {category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const[ products, setProducts ] = useState([]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return(
        <div className='category-container'>
            {
                products && products.map((product) => <ProductCard key={product.id} product={product} />  )
            }
        </div>
    )
}
export default Category;