"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import * as attemptClient from "../Student/attemptClient";
import * as quizClient from "../../client";
import { Card, FormControl, ListGroup } from "react-bootstrap";
import DOMPurify from "dompurify";

export default function QuizResults() {
    const params = useParams();
    const qid = Array.isArray(params.qid) ? params.qid[0] : params.qid;
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [quiz, setQuiz] = useState<any>(null);
    const [recentAttempt, setRecentAttempt] = useState<any>(null);
    const [questions, setQuestions] = useState<any>([]);
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const [noAttemptsTaken, setNoAttemptsTaken] = useState<number>(0);

    const getAttemptsForUser = async (userId: string, quizId: string) => {
        const attempts = await attemptClient.fetchAttemptsByUserAndQuiz(userId, quizId);
        setNoAttemptsTaken(attempts.length);
    }

    const [answersMap, setAnswersMap] = useState<any>({});

    const getRecentAttempt = async (userId: string, quizId: string) => {
        const attempts = await attemptClient.fetchAttemptsByUserAndQuiz(userId, quizId);
        if (attempts && attempts.length > 0) {
            const latestAttempt = attempts[attempts.length - 1];
            setRecentAttempt(latestAttempt);

            const map: Record<string, any> = {};
            if (latestAttempt.answers) {
                latestAttempt.answers.forEach((a: any) => {
                    map[a.questionId] = a;
                });
            }
            setAnswersMap(map);
        }
    }

    const fetchQuestions = async () => {
        const questions = await quizClient.findQuestionsForQuiz(qid as string);
        setQuestions(questions);
    };

    useEffect(() => {
        const loadQuiz = async () => {
            if (!qid || !currentUser?._id) return;

            // First try to get from Redux store
            if (quizzes.length > 0) {
                const foundQuiz = quizzes.find((quiz: any) => quiz._id === qid);
                if (foundQuiz) {
                    setQuiz(foundQuiz);
                    fetchQuestions();
                    getAttemptsForUser(currentUser._id, qid as string);
                    getRecentAttempt(currentUser._id, qid as string);
                    return;
                }
            }

            // If not in Redux store, fetch from API
            try {
                const fetchedQuiz = await quizClient.findQuizById(qid as string);
                setQuiz(fetchedQuiz);
                fetchQuestions();
                getAttemptsForUser(currentUser._id, qid as string);
                getRecentAttempt(currentUser._id, qid as string);
            } catch (error) {
                console.error("Failed to load quiz:", error);
            }
        };

        loadQuiz();
    }, [qid, currentUser?._id]);

    function createMarkup(html: any) {
        return { __html: DOMPurify.sanitize(html) };
    }

    if (!quiz) {
        return <div>Loading quiz results...</div>;
    }

    return (
        <div id="wd-quiz-results">

            <div style={{ width: '80rem' }} className="mx-auto">

                <h4 className="mt-3">{quiz.title}</h4>

                <hr style={{ borderBottom: '2px solid #dee2e6' }} />

                <h5 className="mt-3">Attempt History</h5>

                {recentAttempt ? (
                    <table className="table">
                        <thead>
                            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                                <th></th>
                                <th>Attempt</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                                <td>LATEST</td>
                                <td>{noAttemptsTaken} out of {quiz.howManyAttempts || 1}</td>
                                <td>{recentAttempt.score} / {quiz.points} pts</td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p className="text-muted">No attempts yet</p>
                )}
            </div>

            {recentAttempt && questions.length > 0 && (
                <div className="mt-4 d-flex flex-column align-items-center">
                    {questions.map((question: any) => (
                        <Card className={`w-75 ms-3 me-3 mb-3 mt-4 ${answersMap[question._id]?.isCorrect ? 'border-success shadow-lg' : 'border-danger shadow-lg'}`}>
                            <Card.Header className="d-flex justify-content-between align-items-center">
                                <span>{question.title}</span>
                                <span>{question.points} pts</span>
                            </Card.Header>
                            <Card.Body>
                                <div
                                    dangerouslySetInnerHTML={createMarkup(question.question)}
                                />

                                <hr />

                                {question.type === "Multiple Choice" && question.choices && (
                                    question.choices.map((choice: any, index: number) => (
                                        <ListGroup className="d-flex gap-2 bg-light border-0 shadow-sm mb-2 ms-2 me-2 rounded-3" key={index}>
                                            <ListGroup.Item
                                                className={`d-flex justify-content-between align-items-center border-0 ${answersMap[question._id]?.answer === choice.text
                                                        ? answersMap[question._id]?.isCorrect
                                                            ? 'bg-success bg-opacity-25'
                                                            : 'bg-danger bg-opacity-25'
                                                        : 'bg-transparent'
                                                    }`}>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`question-${question._id}`}
                                                        id={`option-${index}`}
                                                        value={choice.text}
                                                        checked={answersMap[question._id]?.answer === choice.text}
                                                        readOnly
                                                    />
                                                    <label className="form-check-label" htmlFor={`option-${index}`}>
                                                        {choice.text}
                                                    </label>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    ))
                                )}

                                {question.type === "True/False" && (
                                    <div>
                                        <ListGroup className="d-flex gap-2 bg-light border-0 shadow-sm mb-2 ms-2 me-2 rounded-3">
                                            <ListGroup.Item
                                                className={`d-flex justify-content-between align-items-center border-0 ${answersMap[question._id]?.answer === "true"
                                                    ? answersMap[question._id]?.isCorrect
                                                        ? 'bg-success bg-opacity-25'
                                                        : 'bg-danger bg-opacity-25'
                                                    : 'bg-transparent'
                                                    }`}>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`question-${question._id}`}
                                                        id="result-option-true"
                                                        value="true"
                                                        checked={answersMap[question._id]?.answer === "true"}
                                                        readOnly
                                                    />
                                                    <label className="form-check-label" htmlFor="result-option-true">
                                                        True
                                                    </label>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <ListGroup className="d-flex gap-2 bg-light border-0 shadow-sm mb-2 ms-2 me-2 rounded-3">
                                            <ListGroup.Item
                                                className={`d-flex justify-content-between align-items-center border-0 ${answersMap[question._id]?.answer === "false"
                                                    ? answersMap[question._id]?.isCorrect
                                                        ? 'bg-success bg-opacity-25'
                                                        : 'bg-danger bg-opacity-25'
                                                    : 'bg-transparent'
                                                    }`}>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`question-${question._id}`}
                                                        id="result-option-false"
                                                        value="false"
                                                        checked={answersMap[question._id]?.answer === "false"}
                                                        readOnly
                                                    />
                                                    <label className="form-check-label" htmlFor="result-option-false">
                                                        False
                                                    </label>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                )}                                {question.type === "Fill in the Blank" && (
                                    <div className="d-flex gap-2 mt-3 mb-3">
                                        <FormControl
                                            className={`${answersMap[question._id]?.isCorrect
                                                ? 'bg-success bg-opacity-25'
                                                : 'bg-danger bg-opacity-25'
                                                }`}
                                            placeholder="Enter answer"
                                            value={answersMap[question._id]?.answer || ""}
                                            readOnly
                                        />
                                    </div>
                                )}

                            </Card.Body>
                            <Card.Footer>

                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}