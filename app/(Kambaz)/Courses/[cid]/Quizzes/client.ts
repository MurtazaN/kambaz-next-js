import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const QUIZZES_API = `${HTTP_SERVER}/api/quizzes`;

export const findQuizById = async (id: String) => {
    const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/${id}`);
    return data;
};

export const createQuiz = async (courseId: string, quiz: any) => {
    const response = await axiosWithCredentials.post(
        `${QUIZZES_API}/course/${courseId}`, quiz
    );
    return response.data;
};

export const deleteQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.delete(
        `${QUIZZES_API}/${quizId}`
    );
    return response.data;
};

export const updateQuiz = async (quiz: any) => {
    const { data } = await axiosWithCredentials.put(
        `${QUIZZES_API}/${quiz._id}`,
        quiz
    );
    return data;
};

export const publishQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.post(
        `${QUIZZES_API}/${quizId}/publish`
    );
    return response.data;
};

export const findQuestionsForQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}/questions`);
    return response.data;
};

export const createQuestionForQuiz = async (
    quizId: string,
    question: any
) => {
    const response = await axiosWithCredentials.post(
        `${QUIZZES_API}/${quizId}/questions`,
        question
    );
    return response.data;
};