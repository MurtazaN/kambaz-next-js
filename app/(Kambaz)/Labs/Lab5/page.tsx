import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClient from "./HttpClient";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";

import Link from "next/link";


const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Lab5() {
    return (
        <div id="wd-lab5">
            <h2>Lab 5</h2>
            <div className="list-group">
                <Link href="{`${HTTP_SERVER}/lab5/welcome`}"
                    className="list-group-item">
                    Welcome
                </Link>
            </div><hr />
            <EnvironmentVariables />
            <PathParameters />
            <QueryParameters />
            <WorkingWithObjects />
            <WorkingWithArrays />
            <HttpClient />
            <WorkingWithObjectsAsynchronously />
            <WorkingWithArraysAsynchronously />

        </div>
    );
}
