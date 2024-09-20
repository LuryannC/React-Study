import Sidebar from "./components/Sidebar";
import ProjectPage from "./components/ProjectPage";

const projects = {
  project1: {
    name: "Learning React",
    dueDate : "2022-12-31",
    description: "Learning React for the first time",
    tasks: ["Task 1", "Task 2", "Task 3"],
  },
  project2: {
    name: "Project 2",
    dueDate : "2022-12-31",
    description: "Learning React for the first time",
    tasks: ["Task 1", "Task 2", "Task 3"],
  },
};
// const projects = {};

function App() {
  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <div className="flex pt-8">
        <div className="flex-initial w-1/6 h-screen bg-black rounded-tr-2xl px-8 pt-12 mx-auto justify-self-start">
          <Sidebar projects={projects} />
        </div>
          <ProjectPage project={projects.project1} />
      </div>
    </>
  );
}

export default App;
