import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino){
	let texto = fs.readFileSync(origen, "utf-8");
    console.log(`Archivo de Origen: '${origen}':\n${texto}`);
    fs.appendFileSync(destino, texto);
    console.log(`Archivo de Destino: "${destino}"`);
}