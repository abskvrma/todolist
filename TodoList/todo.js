let tasks=[];
let id=1;
let taskname = document.querySelector("#taskname");
let taskList = document.querySelector("#taskList");
taskname.addEventListener("keypress",function(e){
    //console.log(e);
    if(e.key=="Enter")
    {
        //tasks.push(taskname.value);
        let obj={};
        obj.title = taskname.value;
        obj.status = 'Pending';
        obj.id = id;
        id++;
        tasks.push(obj);

        addDom(obj);
        taskname.value="";
        console.log(tasks);



    }
})
function addDom(task)
{
    // let li=document.createElement("li");
    // li.innerText=taskname.value;

    // taskList.append(li);

        let taskdiv=document.createElement("div");

        let span=document.createElement("span");
        span.innerText=task.title;//taskname.value;

        let chk=document.createElement("input");
        chk.setAttribute("type","checkbox");
        chk.addEventListener("click",function(){
            let status="";
            if(chk.checked)
            {
                status="Completed";
                span.style.textDecoration="line-through"
            }
            else
            {
                status="Pending";

                span.style.textDecoration="none";

            }
            tasks=tasks.map(function(item){
                if(item.id==task.id)
                    item.status=status;

                return item;
            })
            console.log(tasks);


        })


        let delButton=document.createElement("button");
        delButton.innerText="Del";
        delButton.addEventListener("click",function(){

            taskdiv.remove();
            tasks=tasks.filter(function(item){
                if(item.id!=task.id)
                    return true;
            })

           console.log(tasks);

        })

        let editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", function() {
            let newTitle = prompt("Enter new title:");
            if (newTitle) {
                tasks = tasks.map(item =>{
                    if (item.id === task.id){
                        item.title = newTitle;
                    }
                    return item;
                });
                span.innerText = newTitle;
            }
            console.log(tasks);
        });
        
        
        

        taskdiv.append(span);
    taskdiv.append(chk);
taskdiv.append(delButton);
taskdiv.append(editButton);

        taskList.append(taskdiv);


}