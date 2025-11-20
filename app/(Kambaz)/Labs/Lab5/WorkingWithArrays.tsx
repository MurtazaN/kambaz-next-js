"use client"

import { useState } from "react";
import { FormControl } from "react-bootstrap";
import client from "./HttpClient";
import Link from "next/link";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithArrays() {
    const API = `${HTTP_SERVER}/lab5/todos`;

    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [errorMessage, setErrorMessage] = useState(null);
    const updateTodo = async (todo: any) => {
        try {
            await client.updateTodo(todo);
            setTodo(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            setErrorMessage(error.response.data.message);
        }
    };
    const deleteTodo = async (todo: any) => {
        try {
            await client.deleteTodo(todo);
            const newTodos = todos.filter((t) => t.id !== todo.id);
            setTodo(newTodos);
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <Link id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </Link>
            <hr />

            <h4>Retrieving an Item from an Array by ID</h4>
            <Link id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </Link>
            <FormControl id="wd-todo-id" defaultValue={todo.id} className="w-50"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <hr />

            <h3>Filtering Array Items</h3>
            <Link id="wd-retrieve-completed-todos" className="btn btn-primary"
                href={`${API}?completed=true`}>
                Get Completed Todos
            </Link>
            <hr />

            <h3>Creating new Items in an Array</h3>
            <Link id="wd-retrieve-completed-todos" className="btn btn-primary"
                href={`${API}/create`}>
                Create Todo
            </Link>
            <hr />

            <h3>Deleting from an Array</h3>
            <Link id="wd-retrieve-completed-todos" className="btn btn-primary float-end" href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </Link>
            <FormControl defaultValue={todo.id} className="w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <hr />

            <h3>Updating an Item in an Array</h3>

            <FormControl defaultValue={todo.id} className="w-25 mb-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />

            <div className="mb-2">
                <Link href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
                    Update Todo
                </Link>
                <FormControl defaultValue={todo.title} className="w-50"
                    onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
            </div>

            <div className="mb-2">
                <Link href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary float-end">
                    Update Todo Description
                </Link>
                <FormControl defaultValue={todo.description} className="w-50"
                    onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
            </div>

            <div className="mb-2">
                <input id="wd-todo-completed" className="form-check-input me-2" type="checkbox" checked={todo.completed}
                    onChange={() => setTodo({ ...todo, completed: (!todo.completed) })} />
                <Link
                    id="wd-update-todo-completed"
                    className="btn btn-primary"
                    href={`${API}/${todo.id}/completed/${todo.completed}`}>
                    Update Todo Completed
                </Link>
            </div>

            <hr />
        </div>
    );
}
