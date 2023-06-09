import Users from "../modals/Users.js";

export const login = async(req, res) => {
    // return res.send("Hi from login...")
    try{
        const {userEmail,userPassword}= req.body
        if(!userEmail) return res.send ("User email is required")
        if(!userPassword) return res.send ("User password is required")
        const response = await Users.find({email:userEmail}).exec()
        // console.log(response);
        if(response.length){
            if(userPassword ===response[0].password){
                return res.send("You are logged in")
            }else{
                return res.send("Wrong pwssored")
            }
        }else{
            return res.send("user not found, Check ypur email")
        }

    }catch(error){
        return res.send("You are logged in")
    }
   
}

export const register = async (req, res) => {
    // return res.send("Hi from register...")

    try {
        const { userName, userEmail, userPassword, userConfirmPassword } = req.body;
        if (!userName) return res.send("User name is requierd!");
        if (!userEmail) return res.send("User email is required!")
        if (!userPassword) return res.send("User Password is required!")
        if (!userConfirmPassword) return res.send("User Confirm Password is required!")
        if (userPassword.length < 8) {
            return res.send("User Password length is less than 8 !")
        }
        if (userConfirmPassword.length < 8) {
            return res.send("User Confirm Password length is less than 8 !")
        }
        if (userPassword != userConfirmPassword) {
            return res.send("Password and Confirm Password Not matched!!")
        }
        const response = await Users.find({ email: userEmail }).exec();
        // console.log(response,"response")      .exec() = shows exact error
        if (response.length) {
            return res.send("Email is already Taken or You are already resgistered!!");
        }
        const user = new Users({
            name: userName,
            email: userEmail,
            password: userConfirmPassword
        });
        await user.save();
        return res.send("Resgistration Succesfull!")
    } catch (error) {
        return res.send(error)
    }
}



export const getUserByEmail = async (req, res) => {
    try {
        const {email,name } = req.body;
        if (!email) return res.send("Email not found!")
        const response = await Users.find({email}).exec();
        if (response[0].email=== email) {
            const res = await Users.updateOne({email},{$set:{name:name}});
            await res.save();
            return res.send("record updated")
        } else {
            return res.send("User not found!")
        }
    } catch (error) {
        return res.send(error)
    }
}


export const changedata = async (req, res)=>{
        try {
            const {email,name } = req.body;
            if (!email) return res.send("Email not found!")
            const response = await Users.find({email}).exec();
            if (response[0].email=== email) {
                const res = await Users.updateOne({email},{$set:{name:name}});
                await res.save();
                return res.send("record updated")
                // return res.send(response[0])
            } else {
                return res.send("User not found!")
            }
        } catch (error) {
            return res.send(error)
        }
    }



    export const updateUser = async (req, res) => {
        try {
            const { email, name } = req.body;
            if (!email) return res.send("Email not found!")
            if (!name) return res.send("Name not found!")
            const response = await Users.findOneAndUpdate({ email }, { name }).exec();
            res.send(response);
        } catch (error) {
            res.send(error)
        }
    }






