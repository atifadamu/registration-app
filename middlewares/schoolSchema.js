const { string } = require("yup")
const { number } = require("yup/lib/locale")

const mongose = reqire("mongose")


const schoolSchema = mongose.schema({
    schoolname: {
        type: String
        requried: true,
        unique: true
        
    },
    location: {
        type: String,
        require: true
        
    },
    category: {
        type: String,
        required: true
        
    },
    facilities: true,
    type: Array,
    reqire: true
    maxlength: 3
    
},
    numOfStudents: {
        type: number,
        reqiuyred:true
},
    Adress: {
        gps: String,
        box: String
        
},
    contact: {
        phone: String,
        email: String
        
}
    
}, {
    timestamps:true
}
)
const Schools = mongoose.model("school", schoolSchema)
module.exports = School
