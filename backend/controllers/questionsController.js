const Question = require('../models/Question');
const Option = require('../models/Option');

exports.getQuestions = async (req, res) => {
  const { courseName } = req.params;

  try {
    const questions = await Question.findAll({
      where: { courseName },
      include: [{ model: Option }],
    });

    if (!questions) {
      return res.status(404).json({ message: 'Questions not found' });
    }

    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

