import DirectoryItem from '../../category/directory-item/directory-item.component';
import './directory.style.scss';

const Directory = ({Categories}) =>{

    
    return(
    <div className="directory-container">

      {
        Categories.map((category)=>(
          <DirectoryItem key={category.id} category={category} />
        ))
      }
      </div>
      )

} 

export default Directory;