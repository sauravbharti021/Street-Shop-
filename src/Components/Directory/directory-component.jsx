import CategoryItem from "../../category/category-item/category-item.component"
import './directory.style.scss';

const Directory = ({Categories}) =>{

    
    return(
    <div className="categories-container">

      {
        Categories.map((category)=>(
          <CategoryItem key={category.id} category={category} />
        ))
      }
      </div>
      )

} 

export default Directory;