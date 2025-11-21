"use client"

import { useState } from "react";
import { FormControl } from "react-bootstrap";
import Link from "next/link";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");

    return (
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>
            <FormControl id="wd-query-parameter-a"
                className="mb-2"
                defaultValue={a} type="number"
                onChange={(e) => setA(e.target.value)} />
            <FormControl id="wd-query-parameter-b"
                className="mb-2"
                defaultValue={b} type="number"
                onChange={(e) => setB(e.target.value)} />

            <Link id="wd-query-parameter-add"
                className="btn btn-primary me-2"
                href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
                Add {a} + {b}
            </Link>
            <Link id="wd-query-parameter-subtract"
                className="btn btn-danger me-2"
                href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
                Substract {a} - {b}
            </Link>
            <Link id="wd-query-parameter-multiply"
                className="btn btn-warning me-2"
                href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
                Multiply {a} x {b}
            </Link>
            <Link id="wd-query-parameter-divide"
                className="btn btn-success me-2"
                href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
                Divide {a} / {b}
            </Link>
            <hr />
        </div>
    );
}
