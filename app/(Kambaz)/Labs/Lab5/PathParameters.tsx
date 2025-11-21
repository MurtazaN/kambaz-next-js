"use client"

import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Link from "next/link";


const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PathParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return (
        <div>
            <h3>Path Parameters</h3>
            <FormControl className="mb-2" id="wd-path-parameter-a" type="number" defaultValue={a}
                onChange={(e) => setA(e.target.value)} />
            <FormControl className="mb-2" id="wd-path-parameter-b" type="number" defaultValue={b}
                onChange={(e) => setB(e.target.value)} />
            <Link className="btn btn-primary me-2" id="wd-path-parameter-add"
                href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
                {/* localhost:3000/lab5/add/25/34 */}
                Add {a} + {b}
            </Link>
            <Link className="btn btn-danger" id="wd-path-parameter-subtract"
                href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
                Substract {a} - {b}
            </Link>
            <Link className="btn btn-warning me-2" id="wd-path-parameter-multiply"
                href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
                Multiply {a} x {b}
            </Link>
            <Link className="btn btn-success" id="wd-path-parameter-divide"
                href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
                Divide {a} / {b}
            </Link>
            <hr />
        </div>
    );
}
