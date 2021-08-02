//import React, {useState, useEffect} from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGigs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //Aqui utilizo mi Custom Hook: useFetchGifs para traer mi coleccion de imagenes junto con un estado (true o false)
    const { data:images, loading } = useFetchGifs(category);
    
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>        

            {/* El && sirve como un if */}
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">           
                    {
                        images.map( (img) => (
                            <GifGridItem 
                                key = {img.id}
                                //Los 3 puntos significan un SPREAD y se utilizan para enviar las propiedades de las imagenes como una
                                //propiedad independiente
                                {...img} />
                            )
                    )
                    }
            
                {/* <h3> { count } </h3>
                <button onClick = {() => setCount( count + 1 )} ></button> */}
            </div>
        </>
    )
}





