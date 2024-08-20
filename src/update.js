import{projects,deleteProject} from "./index.js";

export function updateDisplay(){
    const container = document.getElementById("content");
    container.textContent = "";
    console.log("first: "+projects)
    for(let i = 0; i < projects.length;i++){
        eachCard(projects[i]);
    }
    buttons();
};

function buttons(){
    const delButtons = document.querySelectorAll('.del');
    delButtons.forEach(btn =>  {
    btn.addEventListener('click',(event)=>{
            const titlePro = event.target.parentElement.querySelector("h3").textContent;
            deleteProject(titlePro);
            updateDisplay();
        });
    });
    console.log(projects);
};

function eachCard(project){
    const container = document.getElementById("content");

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const line = document.createElement("div");
    line.classList.add("line");

    const detail = document.createElement("ul");
    const des = document.createElement("li");
    des.innerHTML = "<b>Description:</b> "+project.description;
    const date = document.createElement("li");
    date.innerHTML = "<b>Due Date:</b> "+project.dueDate;
    const com = document.createElement("li");
    let done = "";
    if(project.completed) done = "checked";
    com.innerHTML = `<b>Completed:</b> <input type='checkbox' ${done}/>`;

    //const line2 = document.createElement("div");
    //line2.classList.add = "line";

    const del = document.createElement("button");
    del.classList.add("del");
    del.textContent= "Delete";

    detail.appendChild(des);
    detail.appendChild(date);
    detail.appendChild(com);

    card.appendChild(title);
    card.appendChild(line);
    card.appendChild(detail);
    card.appendChild(line);
    card.appendChild(del);
    
    container.appendChild(card);
};
