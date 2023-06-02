import { v4 as uuidv4 } from 'uuid';
import Users from '../modals/Users.js';

export const otpNumberRegistration = async (req, res) => {
    try {
        const { number} = req.body;
        if (!number) return res.send("number not found.")
        // if (!email) return res.send("email not found.")
        var code1 = uuidv4();
        // res.send(code);

        const isNummberPresent = await Users.find({ number }).exec();
        if (isNummberPresent.length) return res.send("Number already used")

        // const isEmailPresent = await Users.find({ email }).exec();
        // if (isEmailPresent.length) return res.send("Email already used")

        const user = new Users({
            // email: email,
            number: number,
            otpForNumber: code1
           
        })
        await user.save();
        res.send("Check your mobile number for OTP.")

    } catch (error) {
        return res.send(error);
    }
}

export const otpNumberVerification = async (req, res) => {
    try {
        const { number, otpForNumber } = req.body;
        if (!number) return res.send("number is required");
        // if (!email) return res.send("email is required");
        if (!otpForNumber) return res.send("OTP is required");

        const user = await Users.find({ number }).exec();
        if (!user.length) return res.send("user not found");

        if (user[0].otpForNumber == otpForNumber) {
            return res.send("Number is verified through OTP"); 

            const user= await Users.findOneAndUpdate({number},{isNumberVerified}).exec();

        }
        return res.send("OTP wrong!");

        // return res.send(user[0]);


    } catch (error) {
        return res.send(error);
    }
}