const { Router } = require('express');
const studentsCtrl = require('../controllers/students.js');

const router = Router();

router.post('/', studentsCtrl.createStudent);

router.get('/', studentsCtrl.getStudent);

// router.put('/:id', gradesCtrl.updateStudent);

// router.patch('/:id/scores/add', gradesCtrl.addScores);

// router.delete('/:id', gradesCtrl.deleteStudent);

module.exports = router;

