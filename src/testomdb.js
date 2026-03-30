import axios from "axios";


const Test = async () => {

  // Esto solo busca ‘cars’

  const requestString = `http://www.omdbapi.com/?apikey=1d6cd483&s=cars`;

  const apiResponse = await axios.get(requestString);

  return apiResponse.data;
}
let respuesta = await Test();

console.log('respuesta', respuesta);

