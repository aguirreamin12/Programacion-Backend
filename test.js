const Contenedor = require('./contenedor.js')
const log = (p) => console.log(p)
//DATOS DE PRUEBA
const item1 = {
    title: "Buzo Negro - Un Verano Sin Ti (Bad Bunny",
    price: 8000,
    thumbnail: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/209/361/products/61-c2795f7727ec87989416563680462903-1024-1024.png",
}

const item2 = {
    title: "Remera Blanca - Un Verano Sin Ti (Bad Bunny)",
    price: 4250,
    thumbnail: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/209/361/products/211-9a1247b47c50f897b116563683343713-1024-1024.png",
}
  
const item3 ={
    title: "Remera Sublimada Gris - Dignidad (Los Simpsons)",
    price: 2100,
    thumbnail: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/209/361/products/dign1-2d3e91f32d190df65315968540998459-1024-1024.jpg",
}

const item4 = {
    title: "Buzo Canguro - Venus de Jalea (Los Simpsons)",
    price: 4800,
    thumbnail: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/209/361/products/5711-6822a24a2b243851be16480615826743-1024-1024.png",
}

async function main() {
    //CREANDO INSTANCIA
    const contenedor = new Contenedor('./productos.txt')

    //DATA DEBERIA ESTAR VACIA => []
    let datos1 = await contenedor.getAll()
    log(datos1)

    //DEBE TENER 1 ELEMENTO Y RETORNAR 1 (ARCHIVO DEBE CREARSE)
    let id1 = await contenedor.save(item1)
    log(id1)

    //DEBE TENER 2 ELEMENTO Y RETORNAR 2
    let id2 = await contenedor.save(item2)
    log(id2)

    //DATA DEBERIA TENER DOS ELEMENTOS 2
    let datos2 = await contenedor.getAll()
    log(datos2)

    //BUSCAR POR ID 1// NAME debe ser escuadra
    let busca1 = await contenedor.getById(1)
    log(busca1)

    //BUSCAR POR ID QUE NO EXISTE
    let busca2 = await contenedor.getById(10)
    log(busca2)

    //DEBE SALIR UN MENSAJE DE ERROR
    let id3 = await contenedor.save(item4)
    log(id3)

    //BORRAR EL ID 1, deberia tener 1 elemento, solamente el id 2
    await contenedor.deleteById(1)
    let delete1 = await contenedor.getAll()
    log(delete1)

    //BORRAR TODO no deberia tener elementos
   // await contenedor.deleteAll()
   // let delete2 = await contenedor.getAll()
   // log(delete2)

}

main() 