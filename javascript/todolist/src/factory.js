
let Task = ()=> {
    
    let title = '';
    let descr = '';
    let status = '';
    let starred = '';
    let id = 0;
    let info = {title, descr, id, status, starred};

    const setTask = function(p_title, p_descr,p_id, p_status = false, p_starred = false){
        info.title = p_title;
        info.descr = p_descr;
        info.id = p_id;
        info.status = p_status;
        info.starred = p_starred;
    }

    const printTask = ()=>{
        console.log(`${info.title}, ${info.descr} ,${info.status},${info.starred},${info.id}`)
    }


    return {setTask, printTask, info};
}


let Project = () => {
    let tasks = [];
    let id = Date.now();
    let title = '';
    let descr = '';
    let deadline = '';
    let info = {title, descr, id, deadline}
    
    let addTask = (task)=>{
        task.info.id = tasks.length;
        tasks.push(task);
    }

    let setProject = (p_title, p_descr, p_deadline)=>{
        info.title = p_title;
        info.descr = p_descr;
        info.deadline = p_deadline;
        // console.log('in setproject',info.title, info.descr, info.deadline )
    }

    return {setProject, addTask, info, tasks};
    
}

// let t1 = Task();
// t1.setTask('one','one desctiptin', '3', true, true);
// t1.printTask();


export {Task, Project};