const { Router } = require('express');
const studentsCtrl = require('../controllers/students.js');

const router = Router();

router.post('/', studentsCtrl.createStudent);

router.get('/', studentsCtrl.getStudent);

router.get('/:id', studentsCtrl.getStudentById);

router.put('/:id', studentsCtrl.updateStudent);

router.patch('/:id/scores/add', studentsCtrl.addScores);

router.delete('/:id', studentsCtrl.deleteStudent);

module.exports = router;
