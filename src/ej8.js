import{ OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js"
let rta1 = await OMDBSearchByPage("cars", 1)
console.log('respuesta1', rta1)
let rta2 = await OMDBSearchComplete("cars")
rta2.forEach(element => {
    console.log('respuesta2', element)
});
let rta3 = await OMDBGetByImdbID("tt3896198")
console.log('respuesta3', rta3)