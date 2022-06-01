

let projectElement = (project)=>{

    // console.log(project);

    let box = document.createElement('div');
    box.classList.add('project');
    box.setAttribute('data-id',project.info.id);

    let project_title = document.createElement('div');
    project_title.classList.add('project_title');
    project_title.textContent = project.info.title;

    let project_descr = document.createElement('div');
    project_descr.classList.add('project_descr');
    project_descr.textContent = project.info.descr;

    let project_deadline = document.createElement('div');
    project_deadline.classList.add('project_deadline');
    project_deadline.textContent = project.info.deadline;

    let taskbox = document.createElement('div');
    taskbox.classList.add('task_box');

    let buttons = document.createElement('div');
    buttons.classList.add('buttons') ;

    let addTaskButton = document.createElement('button');
    addTaskButton.classList.add('task_add_button');
    addTaskButton.textContent = "Add Task"

    let removeButton = document.createElement('button');
    removeButton.classList.add('remove_project_button');
    removeButton.textContent = "Remove Project";

    buttons.appendChild(addTaskButton);
    buttons.appendChild(removeButton);
    

    box.appendChild(project_title);
    box.appendChild(project_descr);
    box.appendChild(project_deadline);
    box.appendChild(taskbox);
    box.appendChild(buttons);

    return box
}

let taskElement = (task)=>{

    let box = document.createElement('div');
    box.classList.add('task');
    box.setAttribute('data-id', task.info.id)

    let task_title = document.createElement('div');
    task_title.textContent = task.info.title;
    task_title.classList.add('task_title');

    let task_descr = document.createElement('div');
    task_descr.textContent = task.info.descr;
    task_descr.classList.add('task_descr');

    let task_status = document.createElement('input');
    task_status.type = 'checkbox';
    task_status.textContent = task.info.status;
    task_status.classList.add('task_status');

    let task_starred = document.createElement('div');
    task_starred.textContent = task.info.starred;
    task_starred.classList.add('task_starred');


    let removeButton = document.createElement('button');
    removeButton.classList.add('remove_task_button');
    removeButton.textContent = 'Remove Task';


    
    box.appendChild(task_status);
    box.appendChild(task_title);
    box.appendChild(task_descr);
    box.appendChild(task_starred);
    box.appendChild(removeButton);

    return box;

}

export {projectElement, taskElement};


