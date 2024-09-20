import { forwardRef, Fragment, useRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

const ProjectPage = forwardRef( function ProjectPage({project}, ref){

    const page = useRef();

    useImperativeHandle(ref, () => {
        return {
            loadProjectPage() {
                page.current.project = project;
            }
        };
    });

    return (
        <div ref={page} className="flex-auto ml-10">
            <h1>{project.name}</h1>
            <h2>{project.dueDate}</h2>
            <p>{project.description}</p>
            <h1>Tasks</h1>
            <ul>
                {project.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>            
        </div>
    )
})

export default ProjectPage;