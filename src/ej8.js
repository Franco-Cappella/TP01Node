import{ OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js"
let rta1 = await OMDBSearchByPage("cars", 1)

let rta2 = await OMDBSearchComplete("")
console.log('respuesta1', rta1)