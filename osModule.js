//sacar datos del pc con nombre,tipo,version,arquitectura,cpus,memoria total y memoria libre.

const os =require("node:os");

function getSystemInfo () {
    return{
        Nombre: os.platform(),
        Tipo: os.type(),
        Version: os.version(),
        Arquitectura: os.arch(),
        CPUs: os.cpus().length,
        MemoriaLibre : os.freemem();
        MemoriaTotal : os.totalmem();
    };

}

module.exports = {
    getSystemInfo
}