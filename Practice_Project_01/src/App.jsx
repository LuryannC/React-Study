import { Fragment, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectPage from "./components/ProjectPage";
import AddProject from "./components/AddProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

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
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, 
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id), 
      };
    });
  }

  function handleSelectedProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

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
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId), 
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  
  const selectedProjectTasks = projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={selectedProjectTasks} />;

  if(projectsState.selectedProjectId === null){
    content = <AddProject onAddProject={handleAddProject} onCancelAddProject={handleCancelAddProject} />;
  }
  else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectedProject} selectedProjectId={projectsState.selectedProjectId}/>
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
