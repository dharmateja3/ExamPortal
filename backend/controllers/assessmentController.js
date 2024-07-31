const Question = require('../models/Question');
const Option = require('../models/Option');
const Assessment = require('../models/Assessment');

exports.submitAssessment = async (req, res) => {
  const { userId, courseName, responses } = req.body;
  try {
    let score = 0;
    for (const response of responses) {
      const option = await Option.findOne({ where: { id: response.optionId } });
      if (option && option.isCorrect) {
        score += 1;
      }
    }
    await Assessment.create({ userId, courseName, score, date: new Date() });

    res.json({ score });
  } catch (error) {
    console.error('Error submitting assessment:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
