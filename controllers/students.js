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

// Get students
async function getStudent(req, res) {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Get a single student by ID
async function getStudentById(req, res) {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Update a single student by ID
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

// Add scores to the scores array
async function addScores(req, res) {
  try {
    const foundStudent = await Student.findById(req.params.id);
    if (!foundStudent) {
      return res.status(404).send('Student not found');
    }
    const concatedArray = foundStudent.scores.concat(req.body.scores);
    foundStudent.scores = concatedArray;
    await foundStudent.save();
    res.status(200).json(foundStudent);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Delete a single student by ID
async function deleteStudent(req, res) {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.status(200).json({ message: 'Successfully deleted the student' });
  } catch (err) {
    res.status(400).send(err);
  }
}
