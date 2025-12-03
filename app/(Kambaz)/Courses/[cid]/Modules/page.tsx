"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import * as client from "../../client";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { addModule, editModule, updateModule, deleteModule, setModules }
    from "./reducer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ParamValue } from "next/dist/server/request/params";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    console.log(modules);
    const dispatch = useDispatch();
    const fetchModules = async () => {
        const modules = await client.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModules();
    }, []);
    const onCreateModuleForCourse = async () => {
        if (!cid || !moduleName.trim()) return;
        try {
            const newModule = { name: moduleName, course: cid };
            const createdModule = await client.createModuleForCourse((cid as string), newModule);
            dispatch(setModules([...modules, createdModule]));
            setModuleName("");
        } catch (err) {
            console.error("Error creating module:", err);
        }
    };
    const onRemoveModule = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
    };
    const onUpdateModule = async (currentModule: any) => {
        await client.updateModule(currentModule);
        const newModules = modules.map((m: any) => m._id === currentModule._id ? currentModule : m);
        dispatch(setModules(newModules));
    };
    return (
        <div>
            <ModulesControls
                moduleName={moduleName} setModuleName={setModuleName}
                addModule={onCreateModuleForCourse} />
            <br />
            <br />
            <br />
            <ListGroup id="wd-modules" className="rounded-0">
                {modules
                    .map((currentModule: any) => (
                        <ListGroupItem
                            key={currentModule._id}
                            className="wd-module p-0 mb-5 fs-5 border-gray"
                        >
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!currentModule.editing && currentModule.name}
                                {currentModule.editing && (
                                    <FormControl
                                        className="w-50 d-inline-block"
                                        onChange={(e) =>
                                            dispatch(updateModule({ ...currentModule, name: e.target.value }))
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                onUpdateModule({ ...currentModule, editing: false });
                                            }
                                        }}
                                        defaultValue={currentModule.name}
                                    />
                                )}
                                <ModuleControlButtons
                                    moduleId={currentModule._id}
                                    deleteModule={(moduleId) => onRemoveModule(moduleId)}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                                />
                            </div>
                            {currentModule.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {currentModule.lessons.map((lesson: any) => (
                                        <ListGroupItem
                                            key={lesson._id}
                                            className="wd-lesson p-3 ps-1"
                                        >
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name} <LessonControlButtons />
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroupItem>
                    ))}
            </ListGroup>
        </div>
    );
}