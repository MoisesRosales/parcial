var Pais = require('../models/pais');
var debug = require('debug')('parcial:pais_controller');

// Search a one country y database
module.exports.getOne = (req, res, next) => {
    debug("Search for a country", {
        body: req.body
    });
    Pais.findOne({
            codigo_postal: req.body.codigo_postal
        })
        .then((foundPais) => {
            if (foundPais)
                return res.status(200).json(foundPais);
            else
                return res.status(400).json(null)
        })
        .catch(err => {
            next(err);
        });
}
// LISTAR Paises
module.exports.getAll = (req, res, next) => {
    var perPage = Number(req.query.size) || 10,
        page = req.query.page > 0 ? req.query.page : 0;

    var sortProperty = req.query.sortby || "createdAt",
        sort = req.query.sort || "desc";

    debug("Country List",{size:perPage,page, sortby:sortProperty,sort});

    Pais.find({})
        .limit(perPage)
        .skip(perPage * page)
        .sort({ [sortProperty]: sort})
        .then((paises) => {
            return res.status(200).json(paises)
        }).catch(err => {
            next(err);
        })

}
// CREAR PAIS
module.exports.register = (req, res, next) => {
    debug("New Country", {
        body: req.body
    });
    Pais.findOne({
            codigo_postal: req.body.codigo_postal
        })
        .then((foundPais) => {
            if (foundPais) {
                debug("Pais duplicado");
                throw new Error(`Pais duplicado ${req.body.codigo_postal}`);
            } else {
                let newPais = new Pais({
                    codigo_postal: req.body.codigo_postal,
                    nombre: req.body.nombre,
                    poblacion_total: req.body.poblacion_total,
                    extension_territorial: req.body.extension_territorial,
                    capital: req.body.capital 
                    
                    /*TODO: Modificar, hacer hash del password*/
                });
                return newPais.save(); // Retornamos la promesa para poder concater una sola linea de then
            }
        }).then(pais => { // Con el usario almacenado retornamos que ha sido creado con exito
            return res
                .header('Location', '/pais/' + pais._id)
                .status(201)
                .json({
                    codigo_postal: pais.codigo_postal
                });
        }).catch(err => {
            next(err);
        });
}
//Update User
module.exports.update = (req, res, next) => {
    console.log("update");
    debug("Update country", {
        codigo_postal: req.params.username,        
        ...req.body
    });
    
    let update = {
        ...req.body
    };
    console.log("----------------");
    
    console.log(req.body);
    console.log("----------------");
    
    User.findOneAndUpdate({
            codigo_postal: req.params.codigo_postal,
        },update)
        .then((updated) => {
            if (updated)
                return res.status(200).json(updated);
            else
                return res.status(400).json(null);
        }).catch(err => {
            next(err);
        });
}
//Delete User
module.exports.delete = (req, res, next) => {

    debug("Delete user", {
        username: req.params.username,
    });

    User.findOneAndDelete({username: req.params.username})
    .then((data) =>{
        if (data) res.status(200).json(data);
        else res.status(404).send();
    }).catch( err => {
        next(err);
    })
}