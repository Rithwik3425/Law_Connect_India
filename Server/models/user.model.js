const mongoose =require('mongoose');
const bcrypt=require('bcrypt');
const validator=require('validator');

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

 
UserSchema.pre('save',async function(next){

if(!this.isModified('password')) return next();

this.password=await bcrypt.hash(this.password,12);

this.passwordConfirm=undefined;
next();
})

UserSchema.methods.corrpassw=async function(clientpassw,userpassw){
  return await bcrypt.compare(clientpassw,userpassw);
}
const UserModel=new mongoose.model('User',userSchema);

module.exports=UserModel;