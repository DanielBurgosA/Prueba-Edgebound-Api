const { getAllProducts, getProductByName } = require('../handlers/handlerProducts')
 
const getAllController = (req, res) =>{
    try {
        const result = getAllProducts();
        if(!result) return res.status(404).json({error:"No hay productos en el sistema"})
        return res.status(200).json(result);
    } catch (error) {
        return res.status(error.status).json({ error: error.message});
    }
}

const getProductController = (req, res) =>{
    const {filter} = req.params;

    try {
        const result = getProductByName(filter);
        if(!Object.keys(result).length) return res.status(404).json({error:"No se encontró el producto"})
        return res.status(200).json(result);
    } catch (error) {
        return res.status(error.status).json({ error: error.message});
    }
}

module.exports = {getAllController, getProductController}