import {GifItem} from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)
    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>...cargando</h2>)
        }
        
        
        <div className="card-grid">
            {
                images.map(img => (
                    <GifItem
                        key={img.id}
                        title={img.title}
                        url={img.url}
                    />  /* {...img} para enviar todas las properties*/ 
                ))
            }
        </div>
    </>
  )
}
