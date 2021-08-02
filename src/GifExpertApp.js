//NOTAS:
//Utilizar el snippet rafc para crear la plantilla de react (import y export)

import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Puch']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Nuevo']); //se utiliza el spread, que son los ...

    //     //otra solucion es aprovechar el callback que devuelve el setCategories
    //     //setCategories(cats => [...cats, 'Nuevo']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr/> 

            {/* <button onClick = {handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category=>(
                        <GifGrid 
                            key = { category }
                            category = { category }
                        />
                    ))
                }
            </ol>

        </div>
        
    );
}

export default GifExpertApp;