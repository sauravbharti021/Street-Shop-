import { useEffect, useContext, useState,Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';

import { CategoryTitle, CategoryContainer } from './category.style.jsx'
import ProductCard from '../../Components/products-card/products-card.component';

const Category = () =>{

    const {category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const[ products, setProducts ] = useState([]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return(
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />  )
                }
            </CategoryContainer>
        </Fragment>
    )
}
export default Category;