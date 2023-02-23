const username = "wpjavier96";
const pass = "1996javier";
const dataBase = "BDPeluqueria";
const stringConnection = `mongodb+srv://${username}:${pass}@cluster0.65cxdgq.mongodb.net/${dataBase}?retryWrites=true&w=majority`;

module.exports = stringConnection;
