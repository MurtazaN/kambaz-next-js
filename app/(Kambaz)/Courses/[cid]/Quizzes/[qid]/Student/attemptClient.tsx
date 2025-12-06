import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ATTEMPTS_API = `${HTTP_SERVER}/api/attempts`;


export const fetchAttemptsByUserAndQuiz = async (userId: string, quizId: string) => {
    const { data } = await axiosWithCredentials.get(
        `${ATTEMPTS_API}/user/${userId}/quiz/${quizId}`
    );
    return data;
};

// startQuizAttempt(quizId)
export const startQuizAttempt = async (quizId: string) => {
    const response = await axiosWithCredentials.post(
        `${ATTEMPTS_API}/quiz/${quizId}/start`
    );
    return response.data;
}

// submitQuizAttempt(attemptId, answers)
export const submitQuizAttempt = async (attemptId: string, answers: any) => {
    const response = await axiosWithCredentials.post(
        `${ATTEMPTS_API}/${attemptId}/submit`,
        { answers }
    );
    return response.data;
}

// getQuizAttempt(attemptId)
export const getQuizAttempt = async (attemptId: string) => {
    const response = await axiosWithCredentials.get(
        `${ATTEMPTS_API}/${attemptId}`
    );
    return response.data;
}