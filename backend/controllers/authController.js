const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await User.findOne({ where: { email, role: 'student' } });
    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: student.id, role: student.role }, 'secret', { expiresIn: '2h' });
    res.json({ token, username: student.username });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.loginInstitute = async (req, res) => {
  const { email, password } = req.body;

  try {
    const institute = await User.findOne({ where: { email, role: 'institute' } });
    if (!institute) {
      return res.status(404).json({ msg: 'Institute not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, institute.password);
    if (!isPasswordValid) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: institute.id, role: institute.role }, 'secret', { expiresIn: '2h' });
    res.json({ token, username: institute.username });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
