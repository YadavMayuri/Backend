import { v4 as uuidv4 } from 'uuid';
import Users from '../modals/Users.js';

export const otpRegistration = async (req, res) => {
    try {
        const { number, email } = req.body;
        if (!number) return res.send("number not found.")
        if (!email) return res.send("email not found.")
        var codeForNumber = uuidv4();
        var codeForEmail = uuidv4();
        // res.send(code);

        const isNummberPresent = await Users.find({ number }).exec();
        if (isNummberPresent.length) return res.send("Number already used")

        const isEmailPresent = await Users.find({ email }).exec();
        if (isEmailPresent.length) return res.send("Email already used")

        const user = new Users({
            email: email,
            number: number,
            otpForNumber: codeForNumber,
            otpForEmail: codeForEmail,
            isNumberVerified: false,
            isEmailVerified: false

        })
        await user.save();
        res.send("Check your mobile number and Email for OTP.")

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

            const user = await Users.findOneAndUpdate({ number }, { isNumberVerified: true }).exec();
            await user.save();
            return res.send("Number is verified through OTP");

        }
        return res.send("OTP wrong!");

    } catch (error) {
        return res.send(error);
    }
}


export const otpEmailVerification = async (req, res) => {
    try {
        const { email, otpForEmail } = req.body;
        if (!email) return res.send("email is required");
        if (!otpForEmail) return res.send("OTP is required");

        const user = await Users.find({ email }).exec();
        if (!user.length) return res.send("User not found")

        if (user[0].otpForEmail == otpForEmail) {
            const user = await Users.findOneAndUpdate({ email }, { isEmailVerified: true }).exec();
            await user.save();
            return res.send("Email is verified through OTP");

        }
        return res.send("otp wrong!");

    } catch (error) {
        return res.send(error)
    }
}




