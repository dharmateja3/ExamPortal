const express = require('express');
const { loginStudent, loginInstitute } = require('../controllers/authController');
const router = express.Router();

router.post('/login/student', loginStudent);
router.post('/login/institute', loginInstitute);

module.exports = router;
