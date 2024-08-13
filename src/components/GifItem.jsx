

const GifItem = ( { title , url, id } ) => {
  return (
    
        <div className="card">
            <img className="image" src={url} alt={title} />
            <p> { title } </p>
        </div>
      
    
  )
}

export default GifItem
