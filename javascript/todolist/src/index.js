import "./style.css";
import {Task, Project} from './factory.js';
import { projectElement, taskElement } from "./dom.js";

let projects = [];

let addButton = document.querySelector('#add_new_project');
addButton.onclick = showProjectForm;

let project_submit = document.querySelector('#project_form_submit');
project_submit.onclick = newProject;


let project_close = document.querySelector('#project_form_close');
project_close.onclick = closeProject;


let task_close = document.querySelector('#task_form_close');
task_close.onclick = closeTask;

let project_container = document.querySelector('#projects');



// localStorage.removeItem('previous')

 if (localStorage.getItem('previous') != false){
     project_container.innerHTML = localStorage.getItem('previous')
 }

function showProjectForm(){

    let projectForm = document.querySelector('#add_new_project_form');
    projectForm.style.display = 'flex';
    // console.log('in showform')
}

function closeProject(event){
    event.preventDefault();
    // console.log('in closeProject');

    document.querySelector('#project_input_title').value = '';
    document.querySelector('#project_input_descr').value = '';
    document.querySelector("#project_input_deadline").value = '';

    let projectForm = document.querySelector('#add_new_project_form');
    projectForm.style.display = 'none';
}



function newProject(){
    
    // console.log('entering newProject')
    let elementTitle = document.querySelector('#project_input_title');
    let elementDescr = document.querySelector('#project_input_descr');
    let elementDeadline = document.querySelector("#project_input_deadline");

    let title = elementTitle.value;
    let descr = elementDescr.value;
    let deadline = elementDeadline.value;

    let project = Project();
    project.setProject(title, descr, deadline);
    // console.log('created project', project)

    projects.push(project);

    // console.log('exiting newProject')

    drawProjects();

};

function drawProjects(){
    // console.log('enter drawprojecs', projects)
    let project_container = document.querySelector('#projects');
    let project_element = projectElement(projects[projects.length-1]);
    project_container.appendChild(project_element);
    // console.log('exit drawprojects')

    let removeButton = document.querySelectorAll('.remove_project_button')
    // console.log(removeButton)
    for (let i of removeButton){
        i.textContent = 'Delete Project';
        i.onclick = removeProject;
    }

    let addTaskButton = document.querySelectorAll('.task_add_button');
    // console.log(addTaskButton)
    for (let j of addTaskButton){

        j.textContent = 'Add Task';
        j.onclick = showTaskForm;
    }

     localStorage.setItem('previous', project_container.innerHTML);
   
}


function removeProject(event){
    let target = event.target.parentElement.parentElement;
    // console.log(target)
    let target_id = target.getAttribute('data-id');

    for (let i in projects){
        if (projects[i].info.id == target_id){
            projects = projects.splice(i,1);
            break;
        };
    };

    target.remove();

     localStorage.setItem('previous', project_container.innerHTML);

}



function showTaskForm(event){
    let taskForm = document.querySelector('#add_new_task_form');
    taskForm.style.display = 'flex';
    let task_submit = document.querySelector('#task_form_submit');
    task_submit.onclick = newTask.bind(null,event);
    // console.log(task_submit);

}


function newTask(event_old,event_new){

    console.log(1,event_old)
     console.log(2, event_new)
    // event_new.preventDefault();

    let project = event_old.target.parentElement.parentElement;
    let project_id = project.getAttribute('data-id');
    let projectObj = getProjectObj(project_id);

    let elementTitle = document.querySelector('#task_input_title');
    let elementDescr = document.querySelector('#task_input_descr');
    let elementStatus = document.querySelector("#task_input_status");
    let elementStarred = document.querySelector("#task_input_starred");


    let title = elementTitle.value;
    let descr = elementDescr.value;
    let status_val = elementStatus.value;
    let starred = elementStarred.value;

    let task = Task();
    task.setTask(title, descr, 0, status_val, starred);
    console.log('new task', task);

    projectObj.addTask(task);

    drawTasks(projectObj);

    
};

function drawTasks(project){
    let project_id = project.info.id;
    let project_element = document.querySelector(`[data-id="${project_id}"]`);
    let taskbox_element = project_element.children[3];

    // console.log('task element', taskbox_element, project, project.tasks);

    let task_element = taskElement(project.tasks[project.tasks.length-1]);
    // console.log(task_element);
    taskbox_element.appendChild(task_element);

    let task_remove_btn = document.querySelectorAll('.remove_task_button');
    for (let p of task_remove_btn){
    p.onclick = removeTask;
    p.textContent = "Delete Task"
    }

    let task_checkbox = document.querySelectorAll('.task_status');
    for (let q of task_checkbox){
        q.onclick = changeStatus;

    }

     localStorage.setItem('previous', project_container.innerHTML);

}

function closeTask(event){
    event.preventDefault();

    document.querySelector('#task_input_title').value = '';
    document.querySelector('#task_input_descr').value = '';
    document.querySelector("#task_input_status").value = '';
    document.querySelector("#task_input_starred").value = '';

    let taskForm = document.querySelector('#add_new_task_form');
    taskForm.style.display = 'none';

}

function removeTask(event){
    let task = event.target.parentElement;
    let project_element = task.parentElement.parentElement;
    let project_obj = getProjectObj(project_element.getAttribute('data-id'))
    let task_id = task.getAttribute('data-id');
    console.log(task,project_element, project_obj)
    project_obj = project_obj.tasks.splice(task_id,1);

    task.remove();

     localStorage.setItem('previous', project_container.innerHTML);

}

function changeStatus(event){
    let checkbox = event.target;
    let task = checkbox.parentElement;
    if (checkbox.checked == true){
        task.style.textDecoration = 'line-through';
    }
    else{
        task.style.textDecoration = 'none';
    }
}


function getProjectObj(project_id){
    for (let i of projects){
        if (i.info.id == project_id){
            return i;
        }
    }
}

