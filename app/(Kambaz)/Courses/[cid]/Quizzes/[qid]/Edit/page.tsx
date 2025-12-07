"use client";
import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { usePathname, useParams } from "next/navigation";
import DetailsEditor from "./Details/editor";
import QuestionsEditor from "./Questions/questionEditor";

export default function QuizEditor() {
    const pathname = usePathname();
    const params = useParams();
    const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid;
    const qid = Array.isArray(params.qid) ? params.qid[0] : params.qid;

    const newQuiz = {
        title: "New Quiz",
        description: "New description",
        course: cid,
        points: 0,
        assignmentGroup: "quizzes",
        shuffleAnswers: false,
        timeLimit: false,
        multipleAttempts: false,
        howManyAttempts: 1,
        showCorrectAnswers: "no",
        accessCode: "",
        oneQuestionAtATime: false,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        dueDate: "",
        availableDate: "",
        untilDate: "",
        published: false,
    }

    const [quiz, setQuiz] = useState<any>({});
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    useEffect(() => {
        setQuiz(
            pathname.includes("New")
                ? newQuiz
                : quizzes.find((quiz: any) => quiz._id === qid)
        );
    }, []);

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