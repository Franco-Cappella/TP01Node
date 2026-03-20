let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL) {
  try {
    const url = new URL(laURL);

    return {
      protocolo: url.protocol,
      host: url.host, 
      puerto: url.port,
    };
  } catch (error) {
    console.error("Error: La cadena proporcionada no es una URL válida.");
    return null; 
  }
}
