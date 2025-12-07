"use client";
import { useEffect, useState } from "react";
import { Button, Card, FormControl, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import * as quizClient from "../../client";
import { setAttempt, setQuestions } from "../../reducer";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import DOMPurify from 'dompurify';

export default function QuizPreview() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const router = useRouter();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [quiz, setQuiz] = useState<any>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const { questions } = useSelector((state: any) => state.quizzesReducer);

    const fetchQuizAndQuestions = async () => {
        try {
            const quizData = await quizClient.findQuizById(qid as string);
            setQuiz(quizData);

            const questionsData = await quizClient.findQuestionsForQuiz(qid as string);
            dispatch(setQuestions(questionsData));
        } catch (error) {
            console.error("Error fetching quiz data:", error);
        }
    };

    useEffect(() => {
        fetchQuizAndQuestions();
    }, [qid]);

    const [answers, setAnswers] = useState<{ [questionId: string]: string }>({});

    const handleAnswerChange = (questionId: string, answer: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
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

            if (question.type === "Fill in the Blank") {
                // Check if user answer matches any possible answer
                const isCorrect = question.possibleAnswers?.some((ans: any) =>
                    ans.caseSensitive
                        ? ans.text === userAnswer
                        : ans.text.toLowerCase() === userAnswer?.toLowerCase()
                );
                if (isCorrect) {
                    calculatedScore += question.points;
                }
            } else if (question.type === "Multiple Choice") {
                // Find the correct choice
                const correctChoice = question.choices?.find((choice: any) => choice.isCorrect);
                if (correctChoice && userAnswer === correctChoice.text) {
                    calculatedScore += question.points;
                }
            } else if (question.type === "True/False") {
                // Compare with correctAnswer (boolean stored as string)
                if (userAnswer === String(question.correctAnswer)) {
                    calculatedScore += question.points;
                }
            }
        });
        return calculatedScore;
    }

    const handleSubmit = () => {
        const attemptAnswers = Object.entries(answers).map(([questionId, userAnswer]) => {
            const question = questions.find((q: any) => q._id === questionId);
            return {
                questionId,
                userAnswer,
                correct: isCorrect(question)
            };
        });

        let totalScore = calculateScore();
        const newAttempt = {
            user: currentUser._id,
            quiz: quiz._id,
            points: totalScore,
            submittedAt: new Date().toISOString(),
            answers: attemptAnswers
        }
        dispatch(setAttempt(newAttempt));
        router.push(`/Courses/${cid}/Quizzes/${qid}/Results`);
    };

    const isCorrect = (question: any) => {
        const userAnswer = answers[question._id];

        if (question.type === "Fill in the Blank") {
            return question.possibleAnswers?.some((ans: any) =>
                ans.caseSensitive
                    ? ans.text === userAnswer
                    : ans.text.toLowerCase() === userAnswer?.toLowerCase()
            );
        } else if (question.type === "Multiple Choice") {
            const correctChoice = question.choices?.find((choice: any) => choice.isCorrect);
            return correctChoice && userAnswer === correctChoice.text;
        } else if (question.type === "True/False") {
            return userAnswer === String(question.correctAnswer);
        }
        return false;
    };

    function createMarkup(html: any) {
        return { __html: DOMPurify.sanitize(html) };
    }

    if (!quiz || !quiz.title) {
        return <div className="ms-3 mt-3">Loading quiz...</div>;
    }

    return (
        <div className="d-flex">
            <div className="flex-grow-1">
                <h4 className="mt-3 ms-3 mb-3">{quiz.title}</h4>

                <ListGroup className="d-flex gap-2 border-0 ms-3 me-3 mb-3 mt-4 rounded-3"
                    style={{
                        backgroundColor: "#fff5f5",
                        boxShadow: "0 0 8px rgba(255, 0, 0, 0.2)",
                    }}>
                    <ListGroup.Item className="d-flex align-items-center border-0 bg-transparent text-danger">
                        <IoInformationCircleOutline className="me-2 fs-5" />
                        This is a preview
                    </ListGroup.Item>
                </ListGroup>

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

                                {currentQuestion.type === "Multiple Choice" && currentQuestion.choices && (
                                    currentQuestion.choices.map((choice: any, index: number) => (
                                        <ListGroup key={index} className="d-flex gap-2 bg-light border-0 shadow-sm mb-2 ms-2 me-2 rounded-3">
                                            <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 bg-transparent">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`question-${currentQuestion._id}`}
                                                        id={`option-${index}`}
                                                        value={choice.text}
                                                        checked={answers[currentQuestion._id] === choice.text}
                                                        onChange={() => handleAnswerChange(currentQuestion._id, choice.text)}
                                                    />
                                                    <label className="form-check-label" htmlFor={`option-${index}`}>
                                                        {choice.text}
                                                    </label>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    ))
                                )}

                                {currentQuestion.type === "True/False" && (
                                    <>
                                        <ListGroup className="d-flex gap-2 bg-light border-0 shadow-sm mb-2 ms-2 me-2 rounded-3">
                                            <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 bg-transparent">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`question-${currentQuestion._id}`}
                                                        id={`option-true`}
                                                        value="true"
                                                        checked={answers[currentQuestion._id] === "true"}
                                                        onChange={() => handleAnswerChange(currentQuestion._id, "true")}
                                                    />
                                                    <label className="form-check-label" htmlFor={`option-true`}>
                                                        True
                                                    </label>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <ListGroup className="d-flex gap-2 bg-light border-0 shadow-sm mb-2 ms-2 me-2 rounded-3">
                                            <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 bg-transparent">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`question-${currentQuestion._id}`}
                                                        id={`option-false`}
                                                        value="false"
                                                        checked={answers[currentQuestion._id] === "false"}
                                                        onChange={() => handleAnswerChange(currentQuestion._id, "false")}
                                                    />
                                                    <label className="form-check-label" htmlFor={`option-false`}>
                                                        False
                                                    </label>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </>
                                )}

                                {currentQuestion.type === "Fill in the Blank" && (
                                    <div className="d-flex gap-2 mt-3 mb-3">
                                        <FormControl
                                            placeholder="Enter answer"
                                            value={answers[currentQuestion._id] || ''}
                                            onChange={(e) => handleAnswerChange(currentQuestion._id, e.target.value)}
                                        />
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

                <div className="ms-3 me-3 mt-4 d-flex justify-content-center">
                    <Button onClick={handleSubmit} className="me-2" variant="danger">Submit Quiz</Button>
                    <Link href={`/Courses/${cid}/Quizzes/${qid}/Edit`} className="btn btn-secondary me-2">Edit Quiz</Link>
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
                            <button
                                className={`w-100 mb-2 text-start text-danger border-0 bg-transparent ${index === currentQuestionIndex ? "fw-bold" : ""}`}
                                onClick={() => setCurrentQuestionIndex(index)}
                                style={{ cursor: "pointer" }}
                            >
                                <FaRegCircleQuestion className="me-2" />
                                Question {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}