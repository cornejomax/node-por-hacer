const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Estado de la tarea'
};

const argv = require('yargs')
    .command('crear', 'Da de alta una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}