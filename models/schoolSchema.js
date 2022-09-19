

const mongoose = require("mongoose")


const schoolSchema = mongoose.schema({
    schoolname: {
        type: String,
        required: true,
        unique: true,
        
    },
    location: {
        type: String,
        require: true
        
    },
    category: {
        type: String,
        required: true
        
    },
    facilities:{
    type: Array,
    reqire: true
}, 
    

    numOfStudents:{
    type: Number,
    required: true
},
    Address: {
    gps: String,
    box: String
        
},
    contact: {
    phone: String,
    email: String
        
}
    

},
    {timestamps:true}
)

const School = mongoose.model("school", schoolSchema)
module.exports = School
