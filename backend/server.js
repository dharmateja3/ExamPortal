const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/questions');
const assessmentRoutes = require('./routes/assessments');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/assessments', assessmentRoutes);

sequelize.sync();

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

