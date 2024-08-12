import  { useState } from 'react';
import './styles.css';
import AddCategory from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = () => {
        setCategories(['HunterXHunter' , ...categories ]);
    }
    
  return (
    <>
        <h1>GifExpertApp</h1>

       <AddCategory />

        <button onClick={onAddCategory}>
            Agregar
        </button>

        <ol>
            {
                categories.map( category => {
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </>
      
    
  )
}

export default GifExpertApp
