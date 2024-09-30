import {
  forwardRef,
  useImperativeHandle,
  useRef,
  Fragment,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

export default function Sidebar({
  projects,
  onStartAddProject,
  onSelectProject,
  selectedProjectId,
  ...props
}) {
  const hasProjects = Object.keys(projects).length > 0;

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="font-bold text-stone-200 uppercase mb-8 md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if(project.id === selectedProjectId){
            cssClasses += ' bg-stone-800 text-stone-200';
          }
          else
          {
            cssClasses += ' hover:bg-stone-400';
          }

          return (<li key={project.id}>
            <button onClick={() => onSelectProject(project.id)} className={cssClasses}>
              {project.title}
            </button>
          </li>);
        })}
      </ul>
    </aside>
  );
}

{
  /* <h2 className="text-2xl font-bold text-stone-300 uppercase pb-8">
Your projects
</h2>
<div>
<button
  className="bg-stone-800 hover:bg-stone-600 text-stone-500 hover:text-stone-200 py-2 px-4 rounded inline-flex items-center mb-10"
  onClick={onAddProject}
>
  + Add Project
</button>
</div>
{hasProjects && (
<ul className="text-stone-300">
  {Object.entries(projects).map(([projectId, project]) => (
    <li key={projectId}>
      <button
        className="hover:bg-stone-800 text-xl px-2 py-2 inline-flex items-center w-full"
        onClick={() => handleProjectSelect(projectId)}
      >
        {project.name}
      </button>
    </li>
  ))}
</ul>
)} */
}
