/* Módulo OMDBWrapper*/
import axios from "axios";
const APIKEY = "1d6cd483"; // MI APIKEY
const BASE_URL = "http://www.omdbapi.com/?apikey=" + APIKEY
    
const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: []
    };

    let urlFinal = `${BASE_URL}&s=${searchText}&page=${page}`
    returnObject = await axios.get(urlFinal)

    return returnObject.data;
};
const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: []
    };
    let vectorFinal = []
    let urlPre =  `${BASE_URL}&s=${searchText}&page=1` 
    returnObject = await axios.get(urlPre).data
    for(let i = 1; i<=returnObject.totalResults/10; i++){
        let urlFinal = `${BASE_URL}&s=${searchText}&page=${i}`
        objetosAñadibles = await axios.get(urlFinal)
        vectorFinal.push(objetosAñadibles)
    }


    return vectorFinal;
};
const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };
    // No seas vago, acá hay que hacer el cuerpo de la función!!!
    return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };
