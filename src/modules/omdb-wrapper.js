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
    let vectorFinal = [];
    let urlPre = `${BASE_URL}&s=${searchText}&page=1`;

    // Obtener la primera página para calcular el total de resultados
    let primeraRespuesta = await axios.get(urlPre);
    let totalPages = parseInt(primeraRespuesta.data.totalResults, 10); // Acceder correctamente a data

    // Recorrer todas las páginas
    for (let i = 1; i <= totalPages; i++) {
        let urlFinal = `${BASE_URL}&s=${searchText}&page=${i}`;
        let respuesta = await axios.get(urlFinal);
        vectorFinal = vectorFinal.concat(respuesta.data.Search); // Concatenar los resultados
    }

    return vectorFinal; // Retornar todos los resultados
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
