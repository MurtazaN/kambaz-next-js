"use client";
import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
import * as quizClient from "../../client";
import { addQuiz, updateQuiz } from "../../reducer";

export default function DetailsEditor({ quiz, setQuiz }: {
    quiz: any;
    setQuiz: (quiz: any) => void;
}) {
    const params = useParams();
    const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid;
    const dispatch = useDispatch();
    const pathname = usePathname();
    const router = useRouter();

    console.log("DetailsEditor - params:", params, "cid:", cid);

    const createQuizForCourse = async (quiz: any) => {
        if (!cid) return;
        const quizWithId = {
            ...quiz,
            _id: `Q${Date.now()}`
        };
        const newQuiz = await quizClient.createQuiz(cid, quizWithId);
        dispatch(addQuiz(newQuiz));
    };

    const saveQuiz = async (quiz: any) => {
        console.log("Saving quiz:", quiz);
        await quizClient.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
        console.log("Quiz saved and dispatched to Redux");
    };

    const handleSave = async (quiz: any) => {
        console.log("handleSave called, pathname:", pathname);
        if (pathname.includes("New")) {
            await createQuizForCourse(quiz);
        }
        else {
            await saveQuiz(quiz);
        }
        console.log("Navigating to:", `/Courses/${cid}/Quizzes`);
        router.push(`/Courses/${cid}/Quizzes`);
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuiz((prevState: any) => ({ ...prevState, description: e.target.value }));
    }

    const handleCheckboxChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuiz((prevQuiz: any) => ({
            ...prevQuiz,
            [field]: e.target.checked,
        }));
    };

    return (
        <Form id="wd-quiz-details-editor">
            <div>
                <FormGroup className="mb-2">
                    <FormLabel htmlFor="wd-quiz-title">Quiz Title</FormLabel>
                    <FormControl id="wd-quiz-title"
                        value={quiz?.title}
                        onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, title: e.target.value }))}
                    />
                </FormGroup>

                <FormGroup className="mb-4">
                    <FormLabel htmlFor="wd-quiz-description">Quiz Instructions:</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={5}
                        id="wd-quiz-description"
                        value={quiz?.description}
                        onChange={handleDescriptionChange}
                    />
                </FormGroup>

                <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="4" htmlFor="wd-quiz-type" className="text-sm-end">
                        Quiz Type
                    </FormLabel>
                    <Col sm="4">
                        <FormSelect id="wd-quiz-type" name="wd-quiz-type"
                            value={quiz?.quizType}
                            onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, quizType: e.target.value }))}
                        >
                            <option value="Graded Quiz">Graded Quiz</option>
                            <option value="Practice Quiz">Practice Quiz</option>
                            <option value="Graded Survey">Graded Survey</option>
                            <option value="Ungraded Survey">Ungraded Survey</option>
                        </FormSelect>
                    </Col>
                </FormGroup>

                <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="4" htmlFor="wd-group" className="text-sm-end">
                        Assignment Group
                    </FormLabel>
                    <Col sm="4">
                        <FormSelect id="wd-group" name="wd-group"
                            value={quiz?.assignmentGroup}
                            onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, assignmentGroup: e.target.value }))}
                        >
                            <option value="Quizzes">Quizzes</option>
                            <option value="Exams">Exams</option>
                            <option value="Assignments">Assignments</option>
                            <option value="Project">Project</option>
                        </FormSelect>
                    </Col>
                </FormGroup>

                <Row className="mb-2">
                    <Col sm="4" />
                    <Col sm="8">
                        <p className="mb-2 mt-2"><strong>Options</strong></p>
                        <FormCheck
                            className="mb-2"
                            id="wd-shuffle-answers"
                            label="Shuffle Answers"
                            checked={quiz.shuffleAnswers}
                            onChange={handleCheckboxChange("shuffleAnswers")}
                        />
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <FormLabel className="mb-0">
                                Time Limit (minutes)
                            </FormLabel>
                            <FormControl
                                value={quiz?.timeLimit || 0}
                                onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, timeLimit: parseInt(e.target.value) || 0 }))}
                                className="w-25"
                                type="number"
                                min="0"
                            />
                        </div>
                        <FormCheck
                            className="mb-2"
                            id="wd-multiple-attempts"
                            label="Allow Multiple Attempts"
                            checked={quiz.multipleAttempts}
                            onChange={handleCheckboxChange("multipleAttempts")}
                        />
                        {quiz.multipleAttempts && (
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <FormLabel className="mb-0">
                                    Attempts Allowed
                                </FormLabel>
                                <FormControl
                                    value={quiz?.howManyAttempts}
                                    onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, howManyAttempts: e.target.value }))}
                                    className="w-25"
                                    type="number"
                                />
                            </div>
                        )
                        }
                        <FormCheck
                            className="mb-2"
                            id="wd-one-question"
                            label="One Question at a Time"
                            checked={quiz.oneQuestionAtATime}
                            onChange={handleCheckboxChange("oneQuestionAtATime")}
                        />
                        <FormCheck
                            className="mb-2"
                            id="wd-webcam-req"
                            label="Webcam Required"
                            checked={quiz.webcamRequired}
                            onChange={handleCheckboxChange("webcamRequired")}
                        />
                        <FormCheck
                            className="mb-2"
                            id="wd-lock-questions"
                            label="Lock Questions After Answering"
                            checked={quiz.lockQuestionsAfterAnswering}
                            onChange={handleCheckboxChange("lockQuestionsAfterAnswering")}
                        />
                    </Col>
                </Row>

                <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="4" htmlFor="wd-show-correct-answers" className="text-sm-end">
                        Show Correct Answers
                    </FormLabel>
                    <Col sm="4">
                        <FormSelect id="wd-show-correct-answers" name="wd-show-correct-answers"
                            defaultValue={quiz?.showCorrectAnswers}
                            onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, showCorrectAnswers: e.target.value }))}
                        >
                            <option value="no">No</option>
                            <option value="immediately">Immediately after submit</option>
                            <option value="grade_release">After grade released</option>
                        </FormSelect>
                    </Col>
                </FormGroup>

                <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="4" htmlFor="wd-access-code" className="text-sm-end">
                        Access Code
                    </FormLabel>
                    <Col sm="8">
                        <FormControl id="wd-access-code"
                            value={quiz?.accessCode}
                            onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, accessCode: e.target.value }))}
                        />
                    </Col>
                </FormGroup>

                <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="4" className="text-sm-end">
                        Assign
                    </FormLabel>
                    <Col sm="8" className="mt-2">

                        <FormLabel htmlFor="wd-due-date">Due</FormLabel>
                        <FormControl type="date" id="wd-due-date"
                            value={quiz?.dueDate}
                            onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, dueDate: e.target.value }))}
                        />

                        <Row className="mb-2">
                            <Col>
                                <FormLabel htmlFor="wd-available-from" >Available from</FormLabel>
                                <FormControl type="date" id="wd-available-from"
                                    value={quiz?.availableDate}
                                    onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, availableDate: e.target.value }))}
                                />
                            </Col>
                            <Col>
                                <FormLabel htmlFor="wd-available-until" >Until</FormLabel>
                                <FormControl type="date" id="wd-available-until"
                                    value={quiz?.untilDate}
                                    onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, untilDate: e.target.value }))}
                                />
                            </Col>

                        </Row>
                    </Col>
                </FormGroup>

                <hr />

                <div className="float-end mb-2 me-1">
                    <Link href={`/Courses/${cid}/Quizzes`} className="btn btn-secondary me-2">Cancel</Link>
                    <Button onClick={() => handleSave(quiz)} className="me-2" variant="danger">Save</Button>
                </div>
            </div>
        </Form>
    );
}