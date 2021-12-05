const CartaPorte20 = require('./CartaPorte20');
const Ubicacion = require('./Ubicacion');
const Domicilio = require('./Domicilio');
const CantidadTransporta = require('./CantidadTransporta');
const Mercancia = require('./Mercancia');
const Mercancias = require('./Mercancias');
const Autotransporte = require('./Autotransporte');
const IdentificacionVehicular = require('./IdentificacionVehicular');
const Seguros = require('./Seguros');
const FiguraTransporte = require('./FiguraTransporte');

const CartaPorte20Nodes = {
    CartaPorte20,
    IdentificacionVehicular,
    Autotransporte,
    Seguros,
    Mercancias,
    Mercancia,
    Domicilio,
    Ubicacion,
    FiguraTransporte,
    CantidadTransporta,
}

module.exports = CartaPorte20Nodes