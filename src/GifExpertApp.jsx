import  { useState } from 'react';
import './styles.css';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onNewCategory = (newCategory) => {
        if(categories.includes(newCategory)) {
            return;
        }
        setCategories( categories => [newCategory, ...categories]);
    }

    
  return (
    <>
        <h1>GifExpertApp</h1>

       <AddCategory 
            onNewCategory={onNewCategory}
       />

        
        {
            categories.map( category => ( 
                <GifGrid key={category}
                            category={ category }/>
            ))
        }
        
    </>
      
    
  )
}

export default GifExpertApp
