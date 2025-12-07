"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function QuizRedirect() {
    const params = useParams();
    const router = useRouter();
    const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid;
    const qid = Array.isArray(params.qid) ? params.qid[0] : params.qid;

    useEffect(() => {
        // Redirect to Details page by default
        router.push(`/Courses/${cid}/Quizzes/${qid}/Details`);
    }, [cid, qid, router]);

    return null;
}