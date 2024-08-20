import {updateDisplay} from "./update.js";
import {Card} from "./project.js";
import{projects} from "./index.js";

export function createProject(){
    const form = document.getElementById("projectForm");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const dueDate = document.getElementById("dueDate");
    const completed = document.getElementById("completed");

    let tempCard = Card(title.value,description.value,dueDate.value,completed.checked);
    projects.push(tempCard);

    form.reset();
    updateDisplay();
    
    //console.log(projects[1]);
};