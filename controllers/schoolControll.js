const School = require("../models/schoolSchema")

const createSchool = (req, res) => {
    const newSchool = new School({
        schoolname: req, body, schoolname,
        location: req.body.location,
        category: req.body.category,
        facilities: req.body.facilities,
        numOfStudents: req.body.numOfStudents,
        aadress: req.body.address,
        contact:req.body.contact

    })
    newSchool.save();
    res.status(200).json(newSchool)
}

module.exports={createSchool}