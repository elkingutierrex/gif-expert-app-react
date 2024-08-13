import { useState } from "react"

const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('Hola Mundo');
    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) {
            return;
        }
        setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
    }   

  return (
    <form onSubmit={onSubmit}>
        <input type="text"
                placeholder="Buscar Gifs" 
                value={inputValue}
                onChange={handleInputChange}/>
    </form>
  )
}

export default AddCategory
