
//Como es una funcion async, esta funcion no regresa los gifs, sino que regresa una promesa que resuelve la coleccione de mis imagenes.

export const getGifs = async(category) => {

    //el encodeURI se utiliza para quitar/escapar los espacios que la categoria pueda traer, en otras palabras,
    //codifica un string como elemento URI valido (uniform Resource Identifier)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KeB0jdXqQbw95WOTVa5cyCQ4l4Ip4icn&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    // console.log(gifs);
    // setImages( gifs );

    return gifs;

}
