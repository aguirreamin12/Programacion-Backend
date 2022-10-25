class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        const cantidad = this.mascotas.length
        const texto = cantidad > 1 ? `Tiene ${cantidad} mascotas` : 'Tiene una sola mascota';
        return `${this.nombre} ${cantidad === 0 ? 'No tiene mascotas': texto}`
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
    }

    getBookNames(){
        return this.libros.map((e) => e.libros)
    }
}

const usuario = new Usuario('Santino', 'Aguirre')
usuario.getFullName()

usuario.addMascota('Perro')
usuario.addMascota('Gato')
usuario.countMascotas()

usuario.addBook('Bajo la misma estrella', 'John Green')
usuario.addBook('El lobo de Wall Street', 'Jordan Belfort')
usuario.getBookNames()

console.log(usuario)