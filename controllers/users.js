const Student = require('../models/Student');

module.exports = {
  createStudent,
};

async function createStudent(req, res) {
  try {
    const grades = await Student.create(req.body);

    res.status(200).json(student);
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}
