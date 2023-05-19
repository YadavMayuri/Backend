import express from "express";
import { login, register } from "../controllers/UserControllers.js";
import { addProduct } from "../controllers/ProductControllers.js";
import { abc, mayuri } from "../controllers/All-Controllers.js";


var router = express.Router();

router.get('/login', login);
router.get('/register', register);
router.post('/add-product', addProduct);
router.get('/mayuri',mayuri)
router.get('/abc',abc)

export default router;