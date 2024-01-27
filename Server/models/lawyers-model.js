const mongoose=require('mongoose');
const LawSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A name is required for a lawyer'],
        unique: true,
    },
    officeLocation: {
        type: String,
        required: [true, 'A Office Location is Used'],
        trim: true,
    },
    legalExperience: {
        type: Number,
        required: [true, 'Experience must be provided'],
    },
    practiceArea: [String],
    languages: [String],
    rating: {
        type: Number,
        default: 3.5,
    },
    userRatingsCount: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'A lawyer Should have a Description'],
    }
});

const Lawyer = mongoose.model('Lawyers', LawSchema);

module.exports=Lawyer;