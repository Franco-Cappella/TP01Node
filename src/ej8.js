import{ OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js"
let rta1 = await OMDBSearchByPage("cars", 1)
console.log('respuesta1', rta1)
let rta2 = await OMDBSearchComplete("cars")
