import { Fragment, useRef, useState } from "react";

export default function ProjectPage({project}){
    return (
        <div className="flex-auto ml-10">
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
}