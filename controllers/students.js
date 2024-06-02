const Student = require('../models/Student');

module.exports = {
  createStudent,
  getStudent,
  getStudentById,
  updateStudent,
  addScores,
  deleteStudent

};

async function createStudent(req, res) {
  try {
       const student = new Student(req.body);

    await student.save();

    res.status(200).json(student);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Get student
async function getStudent(req, res) {
  try {
    const student = await Student.find({});

    res.status(200).json(student);
  } catch (err) {
    res.status(400).send(err);
  }
}

// // Get a single student by ID
async function getStudentById(req, res) {
  try {
    const student = await Student.findById(req.params.id);

    user.logStudentInfo();

    res.status(200).json(student);
  } catch (err) {
    res.status(400).send(err);
  }
}

// // Update a single student by ID
async function updateStudent(req, res) {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(400).send(err);
  }
}

// // Add a score to the scores array
async function addScores(req, res) {
  try {
    // The scores we will add will be in the req.body
    // Using the model to find the student by Id
    const foundStudent = await Student.findById(req.params.id);

    const concatedArray = foundStudent.scores.concat(req.body.scores);

    foundStudent.scores = concatedArray;

    await foundStudent.save();

    res.send(foundStudent);
  } catch (err) {
    res.status(400).send(err);
  }
}

// // Delte a single student by ID
async function deleteStudent(req, res) {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Successfully Deleted the Student',
    });
  } catch (err) {
    res.status(400).send(err);
  }
}

