"use client";
import { useEffect, useState } from "react";
import { Button, Card, FormControl, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import * as quizClient from "../../client";
import * as attemptClient from "./attemptClient";
import { setQuestions, setAttempt } from "../../reducer";
import { FaRegCircleQuestion } from "react-icons/fa6";
import DOMPurify from "dompurify";

export default function StartQuiz() {
    const params = useParams();
    const qid = Array.isArray(params.qid) ? params.qid[0] : params.qid;
    const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid;
    const dispatch = useDispatch();
    const router = useRouter();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [quiz, setQuiz] = useState<any>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { questions } = useSelector((state: any) => state.quizzesReducer);

    useEffect(() => {
        setQuiz(quizzes.find((quiz: any) => quiz._id === qid));
    }, [qid, quizzes]);

    const fetchQuestions = async () => {
        const questions = await quizClient.findQuestionsForQuiz(qid as string);
        dispatch(setQuestions(questions));
    };

    useEffect(() => {
        fetchQuestions();
    }, [qid]);

    const [answers, setAnswers] = useState<{ [questionId: string]: string }>({});
    const [newAnswer, setNewAnswer] = useState<string>('');

    const handleAnswerChange = (questionId: string, answer: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }));
    };

    const handleFITBChange = (questionId: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: newAnswer,
        }));
    };

    const handleNext = () => {
        setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
    };

    const handlePrev = () => {
        setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
    };

    const currentQuestion = questions[currentQuestionIndex];

    const calculateScore = () => {
        let calculatedScore = 0;

        questions.forEach((question: any) => {
            const userAnswer = answers[question._id];
            const correctAnswer = question.correctAnswer;

            if (question.type === "Fill in the Blank") {
                if (question.possibleAnswers.includes(userAnswer)) {
                    calculatedScore += question.points;
                }
            } else {
                if (userAnswer === correctAnswer) {
                    calculatedScore += question.points;
                }
            }
        });
        return calculatedScore;
    }

    const handleSubmit = async () => {
        const attemptAnswers = Object.entries(answers).map(([questionId, userAnswer]) => {
            const question = questions.find((q: any) => q._id === questionId);
            return {
                questionId,
                answer: userAnswer,
                isCorrect: isCorrect(question),
                pointsEarned: isCorrect(question) ? question.points : 0
            };
        });

        let totalScore = calculateScore();
        const totalPoints = questions.reduce((sum: number, q: any) => sum + q.points, 0);

        const attemptData = {
            userId: currentUser._id,
            quizId: quiz._id,
            score: totalScore,
            totalPoints: totalPoints,
            percentage: (totalScore / totalPoints) * 100,
            answers: attemptAnswers,
            submitted: true,
            submittedAt: new Date().toISOString()
        };

        try {
            const savedAttempt = await attemptClient.startQuizAttempt(attemptData);
            dispatch(setAttempt(savedAttempt));
            router.push(`/Courses/${cid}/Quizzes/${qid}/Results`);
        } catch (error) {
            console.error("Failed to submit quiz:", error);
        }
    };

    const isCorrect = (question: any) => {
        const userAnswer = answers[question._id];
        if (question.type === "Fill in the Blank") {
            return question.possibleAnswers.includes(userAnswer);
        }
        return userAnswer === question.correctAnswer;
    };

    function createMarkup(html: any) {
        return { __html: DOMPurify.sanitize(html) };
    }

    return (
        <div className="d-flex">
            <div className="flex-grow-1">
                <h4 className="mt-3 ms-3 mb-3">{quiz.title}</h4>

                {currentQuestion && (
                    <div className="d-flex justify-content-center">
                        <Card className="w-50 ms-3 me-3 mb-3 mt-4">
                            <Card.Header className="d-flex justify-content-between align-items-center">
                                <span>{currentQuestion.title}</span>
                                <span>{currentQuestion.points} pts</span>
                            </Card.Header>
                            <Card.Body>
                                <div
                                    dangerouslySetInnerHTML={createMarkup(currentQuestion.question)}
                                />

                                <hr />

                                {(currentQuestion.type === "Multiple Choice" || currentQuestion.type === "True/False") && (
                                    currentQuestion.possibleAnswers.map((option: any, index: number) => (
                                        <ListGroup className="d-flex gap-2 bg-light border-0 shadow-sm mb-2 ms-2 me-2 rounded-3">
                                            <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 bg-transparent">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`question-${currentQuestion._id}`}
                                                        id={`option-${index}`}
                                                        value={option}
                                                        checked={answers[currentQuestion._id] === option}
                                                        onChange={() => handleAnswerChange(currentQuestion._id, option)}
                                                    />
                                                    <label className="form-check-label" htmlFor={`option-${index}`}>
                                                        {option}
                                                    </label>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    ))
                                )}

                                {currentQuestion.type === "Fill in the Blank" && (
                                    <div className="d-flex gap-2 mt-3 mb-3">
                                        <FormControl
                                            placeholder="Enter answer"
                                            value={newAnswer}
                                            onChange={(e) => setNewAnswer(e.target.value)}
                                        />
                                        <Button onClick={() => handleFITBChange(currentQuestion._id)} variant="secondary">
                                            Submit
                                        </Button>
                                    </div>
                                )}

                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    className="float-start ms-2"
                                    onClick={handlePrev}
                                    disabled={currentQuestionIndex === 0}
                                    variant="secondary"
                                >
                                    Previous
                                </Button>
                                <Button
                                    className="float-end me-2"
                                    onClick={handleNext}
                                    disabled={currentQuestionIndex >= questions.length - 1}
                                    variant="secondary"
                                >
                                    Next
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                )}
                <br />
                <div className="ms-3 me-3 d-flex justify-content-center">
                    <Button onClick={handleSubmit} className="me-2" variant="danger">Submit Quiz</Button>
                </div>

            </div>

            <div
                className="p-3"
                style={{
                    width: "250px",
                    borderLeft: "1px solid #ccc",
                    height: "100vh",
                    overflowY: "auto",
                    position: "sticky",
                    top: 0,
                }}
            >
                <h5 className="mb-3">Questions</h5>
                <ul className="list-unstyled">
                    {questions.map((q: any, index: number) => (
                        <li key={q._id}>
                            <a
                                className={`w-100 mb-2 text-start text-danger ${index === currentQuestionIndex ? "fw-bold" : ""}`}
                                onClick={() => setCurrentQuestionIndex(index)}
                            >
                                <FaRegCircleQuestion className="me-2" />
                                Question {index + 1}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}