/*import {format, compareAsc } from 'date-fns'; */

const addPrjbtn = document.querySelector("#add-prj");
const addToDobtn = document.querySelector("#add-todo");
const todoNone = document.querySelector(".todo");

const checkList = document.querySelector(".adding-prj");
const allProjects = document.querySelector(".checklist");

var input = document.createElement("input");
var addBtn = document.createElement("button");

let clicked = false;
var currProject;

const mainProjects = [
    {name : "Project 1" , tasks: [] },
];

addPrjbtn.addEventListener("click", () =>{
    input.type = "text";
    input.className = "input-project"; 
    
    addBtn.className = "add-btn";
    addBtn.innerHTML = "Add";

    checkList.appendChild(input); 
    checkList.appendChild(addBtn);
});

addBtn.addEventListener("click", () =>{
    var inputProject = input.value;
    var Project = document.createElement("div");
    Project.innerHTML = inputProject;

    if(inputProject){
        const newProject = {name: inputProject , tasks : []}
        mainProjects.push(newProject);

        Project.addEventListener("click", () =>{
            clicked = true;
            currProject = inputProject;
            console.log(" current div is ", currProject);
        });
    }

    checkList.appendChild(Project);

});

addToDobtn.addEventListener("click", () =>{
    console.log(clicked);
    console.log(todoNone);
    const seenAlready = document.querySelector(".select-div-pls");
    if(clicked){
        if(seenAlready){
            todoNone.removeChild(seenAlready);
        }
        createTaskDeadline();
    }else{  
        var todoSelectDiv = document.createElement("div");
        if(!seenAlready){
            todoSelectDiv.className = "select-div-pls";
            todoSelectDiv.innerHTML = "Please Select a Project";
        }
        todoNone.appendChild(todoSelectDiv);
    }
});

function createTaskDeadline(){
    const addingTaskDate = document.querySelector(".nav-right");

    const taskCalendar = document.createElement("input");
    taskCalendar.setAttribute("type", "date");

    const taskName = document.createElement("input");
    taskName.className = "taskName";

    addingTaskDate.appendChild(taskCalendar);
    addingTaskDate.appendChild(taskName);

}