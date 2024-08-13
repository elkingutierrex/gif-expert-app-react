
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

  return (
    <div>
        <h2> { category } </h2>
        <h3> 
            {
                isLoading && (<p>Cargando...</p>)
            } 
        </h3>       
        <div className="card-grid">
            {
                images.map( (image ) => (
                    <GifItem 
                        key={image.id}
                        {...image} 
                    />  
                ))
            }
        </div>
        
    </div>
  )
};
