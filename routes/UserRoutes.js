import express from "express";
import { login, register,getUserByEmail,changedata} from "../controllers/UserControllers.js";
import { addProduct,getAllProducts } from "../controllers/ProductControllers.js";
import { abc, mayuri } from "../controllers/All-Controllers.js";


var router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/add-product', addProduct);
router.get('/get-all-products', getAllProducts);
router.post('/get-user-by-email', getUserByEmail);
router.post("/change-data", changedata)


// router.get('/mayuri',mayuri)
// router.get('/abc',abc)

export default router;