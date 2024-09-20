import { Fragment, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectPage from "./components/ProjectPage";
import AddProject from "./components/AddProject";
import NoProjectSelected from "./components/NoProjectSelected";

const projects = {
  project1: {
    name: "Learning React",
    dueDate: "2022-12-31",
    description: "Learning React for the first time",
    tasks: ["Task 1", "Task 2", "Task 3"],
  },
  project2: {
    name: "Project 2",
    dueDate: "2022-12-31",
    description: "Learning React for the first time",
    tasks: ["Task 1", "Task 2", "Task 3"],
  },
};
// const projects = {};

function App() {
  const [projectsState, setProjectsState] = useState({selectedProjectId: undefined, projects: []});

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {

      const newProject = {
        ...projectData,
        id: Math.random(),
      }

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    })
  }

  console.log(projectsState);

  let content;
  if(projectsState.selectedProjectId === null){
    content = <AddProject onAddProject={handleAddProject} />;
  }
  else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} projects={projects}/>
      {content}
    </main>
  );
}

export default App;

// <div className="flex pt-8">
//   <div className="flex-initial w-1/6 h-screen bg-black rounded-tr-2xl px-8 pt-12 mx-auto justify-self-start">
//   </div>
//   <div className="flex-auto mx-72 mt-20">
//     {displayAddProjectPage && <AddProject onAddProject={handleOnAddProject} />}
//     {/* <ProjectPage project={projects.project1} /> */}
//   </div>
// </div>
