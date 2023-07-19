const { Router } = require('express');
const {getAllController, getProductController} = require ('../controllers/controllersProducts')

//definicion router
const router = Router();

router
    .get("/", getAllController)
    .get("/:filter", getProductController)

module.exports = router;