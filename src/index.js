import "./styles.css";
import {Card} from "./project.js";
import {createProject} from "./createProject.js";

let projects = [];

const addProject = document.getElementById("addProject");
addProject.addEventListener("click",()=>createProject());

function deleteProject (projectTitle) {
    projects = projects.filter(project => project.title !== projectTitle);
};

export {projects,deleteProject};
