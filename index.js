class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        const cantidad = this.mascotas.length
        const texto = cantidad > 1 ? `Tiene ${cantidad} mascotas` : 'Tiene una sola mascota';
        console.log(`${this.nombre} ${cantidad === 0 ? 'No tiene mascotas': texto}`)
    }

    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }

    getBookNames(){
        console.log(this.libros.map((e) => e.libros))
    }
}

const usuario = new Usuario('Santino', 'Aguirre')
Usuario.getFullName()

Usuario.addMascota('Perro')
Usuario.addMascota('Gato')
Usuario.countMascotas()

Usuario.addBook('Bajo la misma estrella', 'John Green')
Usuario.addBook('El lobo de Wall Street', 'Jordan Belfort')
Usuario.getBookNames()