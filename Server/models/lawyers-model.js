const mongoose=require('mongoose');


const LawSchema=mongoose.Schema({
    Sector:{
        type:String,
        required:[true,'A Sector must be given'],
    },
    name:{
        type:String,
        required:[true,'A name is required for a lawyer'],
        unique:true,
    },
    officelocation:{
        type:String,
        required:[true,'A Office Location is Used'],
    },
    legalExperience:{
        type:Number,
        required:[true,'Experience must be provided'],
    },
    languages:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    }
})

const Lawyers=new mongoose.model('Lawyers',LawSchema);

module.exports=Lawyers;