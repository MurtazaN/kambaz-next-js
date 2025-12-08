"use client";
import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useParams } from "next/navigation";
import DetailsEditor from "../Details/editor";
import QuestionsEditor from "../Questions/questionEditor";
import * as quizClient from "../../client";

export default function QuizEditor() {
    const pathname = usePathname();
    const params = useParams();
    const dispatch = useDispatch();
    const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid;
    const qid = Array.isArray(params.qid) ? params.qid[0] : params.qid;

    const newQuiz = {
        title: "New Quiz",
        description: "New description",
        courseCode: cid,
        points: 0,
        quizType: "Graded Quiz",
        assignmentGroup: "Quizzes",
        shuffleAnswers: true,
        timeLimit: 20,
        multipleAttempts: false,
        howManyAttempts: 1,
        showCorrectAnswers: "",
        accessCode: "",
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        dueDate: "",
        availableDate: "",
        untilDate: "",
        published: false,
    }

    const [quiz, setQuiz] = useState<any>(newQuiz);
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    useEffect(() => {
        const loadQuiz = async () => {
            if (pathname.includes("New")) {
                setQuiz(newQuiz);
            } else {
                // First try to get from Redux store
                const foundQuiz = quizzes.find((quiz: any) => quiz._id === qid);
                if (foundQuiz) {
                    setQuiz(foundQuiz);
                } else {
                    // If not in Redux, fetch from server
                    try {
                        const fetchedQuiz = await quizClient.findQuizById(qid as string);
                        setQuiz(fetchedQuiz);
                    } catch (error) {
                        console.error("Error fetching quiz:", error);
                    }
                }
            }
        };
        loadQuiz();
    }, [qid, quizzes, pathname]);

    return (
        <div>

            <div className="mb-2 me-4 d-flex justify-content-end">
                <h5 className="me-4">Points {quiz.points}</h5>
                <h5 className="me-2">{quiz.published ? ("Published") : ("Not published")}</h5>
            </div>

            <hr />

            <Tabs
                defaultActiveKey="details"
                className="mb-3"
            >
                <Tab eventKey="details" title={<span className="text-danger">Details</span>}>
                    <DetailsEditor quiz={quiz} setQuiz={setQuiz} />
                </Tab>
                <Tab eventKey="questions" title={<span className="text-danger">Questions</span>}>
                    <QuestionsEditor quiz={quiz} setQuiz={setQuiz} />
                </Tab>
            </Tabs>
        </div>
    );
}