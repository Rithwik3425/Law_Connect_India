const mongoose =require('mongoose');

const userSchema= new mongoose.Schema({
  name:{
    type:String,
    required:[true,'please provide a name'],
    trim:true,
  },
  email:{
    type:String,
    required:[true,'Please enter the email'],
    unique:true,
    lowercase:true,
    validator:[validator.isEmail,'please enter a valid email id']
  },
  password:{
    type:String,
    required:[true,'please provide the password'],
    minlenght:8,
    trim :true,
  },
  passwordConfm:{
    type:String,
    required:[true,'Please enter  a password once again'],
    validator:{
      validator:function(el) {
        return el===this.password;
      }
    }
  }
})