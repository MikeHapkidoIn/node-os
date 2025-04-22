const {getSystemInfo} = require("./osModule");
const {getNetInfo} = require("./networkModule");

const sistemaOperativo = getSystemInfo();
const red  = getNetInfo ();