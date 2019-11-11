const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts) //recibe configuraciones de definición de argumentos
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv; //método para mostrar los argumentos del yargs definido


module.exports = {
    argv
}