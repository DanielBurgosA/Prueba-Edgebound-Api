const db = require('../../database/db')

//devolver todos los productos
const getAllProducts = () => {
    return db;
}

//buscar por nombre y agregar los sugeridos
const getProductByName = (filter) => {
    let answer = {};

    //encontrar el producto
    for (let product of db.product){
        if(filter.toLowerCase() === product.name.toLowerCase()){
            answer = {"product":product , "suggested":suggested(product)};
            break;
        }
    }   
    return answer;
}

// agregar los productos sugeridos
const suggested = (product) =>{
    const answer =[]

    for (let i=0 ; answer.length<2 && i<db.product.length; i++){
        (db.product[i].category===product.category&&db.product[i]!==product) && answer.push(db.product[i]);
   }
    return answer;
}

module.exports = {getAllProducts, getProductByName}