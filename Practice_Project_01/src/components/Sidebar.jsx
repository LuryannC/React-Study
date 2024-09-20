import { Fragment, useRef, useState } from "react";

export default function Sidebar({ projects, ...props }) {
  const hasProjects = Object.keys(projects).length > 0;

  return (
    <Fragment>
      <h1 className="text-2xl font-bold text-stone-300 uppercase pb-8">
        Your projects
      </h1>
      <button className="bg-stone-800 hover:bg-stone-600 text-stone-500 hover:text-stone-200 py-2 px-4 rounded inline-flex items-center mb-10">
        + Add Project
      </button>
      {hasProjects && (
        <ul className="text-stone-300">
          {Object.entries(projects).map(([projectId, project]) => (
            <li key={projectId}>
              <button className="hover:bg-stone-800 text-xl px-2 py-2 inline-flex items-center w-full">{project.name}</button>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
