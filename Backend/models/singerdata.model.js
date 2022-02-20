const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const singerdata = new mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    gender: {
        type:String,
        required:true
    },  
    totalsong:[{
        token:{
            type:String,
            required:true
        }
    }]
    
})

// generating tokens 
singerdata.methods.generateAuthToken = async function(){
   try {
       console.log(this._id);
       const token = jwt.sign({_id:this._id.toString()}, "mynameisyogeshsambare");
       this.tokens = this.tokens.concat({token:token})
       await this.save();
       return token;
   } catch (error) {
       res.send("the error part" + error);
       console.log("the error part" + error);
   }
}

// converting password into hash 
singerdata.pre("save", async function(next) {

    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
        this.confirmpassword = await bcrypt.hash(this.password, 10);
    }
 
    next();
} )


// now we need to create a collections

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;