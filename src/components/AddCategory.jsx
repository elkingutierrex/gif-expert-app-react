import { useState } from "react"

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo');
    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
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
