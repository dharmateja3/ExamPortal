import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Questions = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState('');
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/questions/${courseName}`);
        console.log(response.data[0].Options);
        setQuestions(response.data[0].Options);
      } catch (error) {
        console.log('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [courseName]);

  const handleChange = (questionId, optionId) => {
    setAnswers({
      ...answers,
      [questionId]: optionId
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/assessments/score`, {
        answers,
        courseName
      });
      setScore(0);
      if (response.data.token) {
        navigate.push('/');
      }
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  return (
    <div className="container mt-5">
      {score === 0 ? (
        <form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <div key={question.id} className="mb-4">
              <h5>{question.question_text}</h5>
              {question.options.map((option) => (
                <div key={option.id} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={`question-${question.id}`}
                    value={option.id}
                    onChange={() => handleChange(question.id, option.id)}
                  />
                  <label className="form-check-label">{option.option_text}</label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      ) : (
        <h2>Your score is: {score}</h2>
      )}
    </div>
  );
};

export default Questions;

