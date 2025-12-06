import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const QUESTIONS_API = `${HTTP_SERVER}/api/questions`;

export const findQuestionById = async (questionId: string) => {
    const response = await axiosWithCredentials.get(`${QUESTIONS_API}/${questionId}`);
    return response.data;
};

export const deleteQuestion = async (questionId: string) => {
    const response = await axiosWithCredentials.delete(
        `${QUESTIONS_API}/${questionId}`
    );
    return response.data;
};

export const updateQuestion = async (question: any) => {
    const { data } = await axiosWithCredentials.put(
        `${QUESTIONS_API}/${question._id}`,
        question
    );
    return data;
};