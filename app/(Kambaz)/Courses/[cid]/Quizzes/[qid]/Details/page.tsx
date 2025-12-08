"use client";
import { Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import * as attemptClient from "../Student/attemptClient";
import * as quizClient from "../../client";
import DOMPurify from 'dompurify';

export default function QuizDetails() {
    const params = useParams();
    const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid;
    const qid = Array.isArray(params.qid) ? params.qid[0] : params.qid;
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [quiz, setQuiz] = useState<any>(null);
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const [noAttemptsTaken, setNoAttemptsTaken] = useState<number>(0);

    const getAttemptsForUser = async (userId: string, quizId: string) => {
        if (!userId || !quizId) return;
        try {
            const attempts = await attemptClient.fetchAttemptsByUserAndQuiz(userId, quizId);
            setNoAttemptsTaken(attempts?.length || 0);
        } catch (error) {
            console.error("Failed to fetch attempts:", error);
            setNoAttemptsTaken(0);
        }
    }

    useEffect(() => {
        const loadQuiz = async () => {
            if (!qid) return;

            // First try to get from Redux store
            if (quizzes.length > 0) {
                const foundQuiz = quizzes.find((quiz: any) => quiz._id === qid);
                if (foundQuiz) {
                    setQuiz(foundQuiz);
                    if (foundQuiz && currentUser?._id) {
                        getAttemptsForUser(currentUser._id, qid);
                    }
                    return;
                }
            }

            // If not in Redux store, fetch from API
            try {
                const fetchedQuiz = await quizClient.findQuizById(qid as string);
                setQuiz(fetchedQuiz);
                if (fetchedQuiz && currentUser?._id) {
                    getAttemptsForUser(currentUser._id, qid);
                }
            } catch (error) {
                console.error("Failed to fetch quiz:", error);
            }
        };

        loadQuiz();
    }, [qid, quizzes, currentUser]);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        });
    };

    function createMarkup(html: any) {
        return { __html: DOMPurify.sanitize(html) };
    }

    if (!quiz) {
        return <div className="text-center mt-5">Loading quiz details...</div>;
    }

    return (
        <div id="wd-quiz-details" className="d-flex flex-column align-items-center justify-content-center">

            <div style={{ width: '80rem' }} className="mx-auto">

                <h4 className="mt-3">{quiz.title}</h4>

                <hr style={{ borderBottom: '2px solid #dee2e6' }} />

                {currentUser && currentUser.role === "FACULTY" && quiz && (
                    <table className="table table-borderless mt-2 mb-3" style={{ borderBottom: '2px solid #dee2e6' }}>
                        <tbody>
                            <tr>
                                <th className="text-end w-50 pe-4">Quiz Type</th>
                                <td>{quiz.quizType}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">Points</th>
                                <td>{quiz.points}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">Assignment Group</th>
                                <td>{quiz.assignmentGroup}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">Shuffle Answers</th>
                                <td>{quiz.shuffleAnswers}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">Time Limit</th>
                                <td>{quiz.timeLimit}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">Multiple Attempts</th>
                                <td>{quiz.multipleAttempts ? "Yes" : "No"}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">How Many Attempts</th>
                                <td>{quiz.howManyAttempts || 1}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">Show Correct Answers</th>
                                <td>{quiz.showCorrectAnswers}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">Access Code</th>
                                <td>{quiz.accessCode || "None"}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">One Question At A Time</th>
                                <td>{quiz.oneQuestionAtATime}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">Webcam Required</th>
                                <td>{quiz.webcamRequired}</td>
                            </tr>
                            <tr>
                                <th className="text-end pe-4">Lock Questions After Answering</th>
                                <td>{quiz.lockQuestionsAfterAnswering}</td>
                            </tr>
                        </tbody>
                    </table>
                )}



                <table className="table">
                    <thead>
                        <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                            <th>Due Date</th>
                            <th>Available Date</th>
                            <th>Until Date</th>
                            <th>Attempts Allowed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                            <td>{formatDate(quiz.dueDate)} at 11:59pm</td>
                            <td>{formatDate(quiz.availableDate)} at 11:59pm</td>
                            <td>{formatDate(quiz.untilDate)} at 11:59pm</td>
                            <td>{quiz.howManyAttempts || 1}</td>
                        </tr>
                    </tbody>
                </table>


            </div>

            <div className="mt-4">
                {currentUser && currentUser.role === "FACULTY" && (
                    <>
                        <Button className="me-2" variant="secondary" href={`/Courses/${cid}/Quizzes/${qid}/Preview`} id={`wd-quiz-preview-btn`}>
                            Preview
                        </Button>
                        <Button className="me-2" variant="secondary" href={`/Courses/${cid}/Quizzes/${qid}/Edit`} id={`wd-quiz-edit-btn`}>
                            <FaPencilAlt className="me-2 fs-6 mb-1" />
                            Edit
                        </Button>
                    </>
                )}

                {currentUser && currentUser.role === "STUDENT" && quiz && (
                    (!quiz.multipleAttempts || noAttemptsTaken < (quiz.howManyAttempts || 1)) ? (
                        <Button variant="secondary" href={`/Courses/${cid}/Quizzes/${qid}/Student`} id="wd-quiz-start-btn">
                            Start Quiz
                        </Button>
                    ) : (
                        <Button variant="secondary" href={`/Courses/${cid}/Quizzes/${qid}/Results`} id="wd-quiz-results-btn">
                            View Results
                        </Button>
                    )
                )}
            </div>
        </div>
    );
}