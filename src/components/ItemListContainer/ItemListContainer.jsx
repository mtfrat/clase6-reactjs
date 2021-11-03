import { getFetch } from "../../services/getFetch"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() =>{
        // Llamo a la promesa
        getFetch

        .then(res =>{
            setItems(res)
        })
    },[])

    return (
        <div>
            <h1 className="mt-5">Autos disponibles</h1>
            <div style={{ display: 'flex',flexDirection:'row'}}>
                <ItemList items = {items}/>
            </div>
        </div>
    )
}

export default ItemListContainer