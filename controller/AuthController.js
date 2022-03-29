const bcrypt = require('bcryptjs')
const UserSchema = require("../models/User")
const jwt = require('jsonwebtoken')
const register = async (req, res, next) => {
    const data = req.body;
    const oldUser = await UserSchema.findOne({
        email: data.email
    });
    if (oldUser) {
        return res
            .status(400)
            .json({
                success: false,
                status: "Хэрэглэгч аль хэдийн үүссэн байна."
            });
    }
    var hashedPassword = await bcrypt.hash(data.password, 10)
    data.password = hashedPassword
    data.role == 0 ? data.role_id = 1 : data.role_id = data.role
    data.created_date = Date("Y-m-d")
    data.last_activity = Date("Y-m-d h:m:s")
    UserSchema.create(data, function (err, data) {
        if (err) {
            res.json({
                success: false,
                data: err,
                error: "The input field is empty"
            })
        } else {
            email = data.email
            const token = jwt.sign({
                    user_id: data._id,
                    email
                },
                process.env.TOKEN_KEY, {
                    expiresIn: "2h"
                }
            )
            res.json({
                success: true,
                data: data,
                token: token
            })
        }
    })
}
const login = async (req, res)=>{
    try{
        const {email, password} = req.body
        if(!(email && password)){
            res
            .status(400)
            .json({
                success: false,
                status: "Утгуудаа бүрэн оруулна уу.",
            })
            return
        }
        else{
            const user = await UserSchema.findOne({email})
            if(user&&(await bcrypt.compare(password, user.password))){
                // Create Taken
                const token = jwt.sign(
                    {user_id: user._id, email},
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h"
                    }
                )
                res
                .status(200)
                .json({
                    success: true,
                    status: "Амжилттай нэвтэрлээ",
                    data: user,
                    token: token
                })
                
            }
            else{
                res.status(400)
                .json({
                    success:false,
                    status: "Нууц үг нэр хоорондоо таарахгүй байна"
                })
                return
            }
        }
    }
    catch(err){
        console.log(err)
    }
    
}
module.exports = {
    register,login
  }