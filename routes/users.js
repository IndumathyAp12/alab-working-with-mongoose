const { Router } = require('express');
const gradesCtrl = require('../controllers/users.js');

const router = Router();

router.post('/', gradesCtrl.createStudent);

// router.get('/', gradesCtrl.getStudentById);

// router.put('/:id', gradesCtrl.updateStudent);

// router.patch('/:id/scores/add', gradesCtrl.addScores);

// router.delete('/:id', gradesCtrl.deleteStudent);

module.exports = router;

