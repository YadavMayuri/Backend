import express from "express";
import { login, register,getUserByEmail,changedata,updateUser} from "../controllers/UserControllers.js";
import { addProduct,getAllProducts } from "../controllers/ProductControllers.js";
import { abc, mayuri } from "../controllers/All-Controllers.js";
import { checkEmail, checkName } from "../middlewares/authMiddleware.js";
import { loginOTPchechForEmail, loginOTPchechForNumber, otpEmailVerification, otpLogin, otpNumberVerification, otpRegistration,  } from "../controllers/OtpControllers.js";


var router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/add-product', addProduct);
router.get('/get-all-products', getAllProducts);
router.post('/get-user-by-email', getUserByEmail);
router.post("/change-data", changedata);
router.post('/update-user',checkEmail,checkName,updateUser);
router.post('/otpRegistration',otpRegistration);
router.post('/otpNumberVerify',otpNumberVerification);
router.post('/otpEmailVerify',otpEmailVerification);
router.post('/otp-login', otpLogin)
router.post('/loginOTPcheckForNumber', loginOTPchechForNumber);
router.post('/loginOTPcheckForEmail', loginOTPchechForEmail)


// router.post('/otp-check-login', otpCheckLogin)



// router.get('/mayuri',mayuri)
// router.get('/abc',abc)

export default router;