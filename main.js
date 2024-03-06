//Creamos variables asociadas a los Id's deel html
const INPUT = document.getElementById("input");
let listTask = document.getElementById("list-task");

//Variable que almacena todas las tareas
let allTasks = [];

//Variable que almacenara los estados de los checkbox
let checkedS = [];

/* Predifined and constant tasks
//Lista de tareas "hardcoded"
let defaultList=[
    {
        name:"Water the plants",
        isDone:false
    },
    {
        name:"Do the shopping",
        isDone:true
    },
    {
        name:"Promenade the dog",
        isDone:false
    },
];

//Añadimos estas tareas
for(let i=0;i<defaultList.length;i++){
    addDefaultTask(defaultList[i].name, defaultList[i].isDone);
}
*/

//Lo inicializamos para obtener las palabras guardadas en la memoria
defaultTasks();

//Iniciamos el array con las tareas ya existentes
getTasks();


//Se añade un evento al input el cual detecta cuando el usuario presiona "enter"
INPUT.addEventListener("keyup", function(event) {
    if (event.key == "Enter" ) {
        let task=INPUT.value;
        //Comprobamos si este esta vacio
        if(task === ""){
            alert("Any task has been written...");
            INPUT.setAttribute("placeholder", "You need to write something here...");
            setTimeout(function(){
                INPUT.setAttribute("placeholder", "What plans you have for today?...")
            },7777);
            return;
        }
        createElementList(task, false);
    }
});

//Esta funcion añadira una tarea a la lista
function addTask(){
    //Obtenemos el valor del input
    let task=INPUT.value;

    //Comprobamos si este esta vacio
    if(task === ""){
        alert("Any task has been written...");
        INPUT.setAttribute("placeholder", "You need to write something here...");
        setTimeout(function(){
            INPUT.setAttribute("placeholder", "What plans you have for today?...")
        },7777);
        return;
    }
    createElementList(task, false);
}

//Con esta funcion creamos un array que recoge las tareas que estan escritas
function getTasks(){
    allTasks = [];
    const LIST = document.getElementsByTagName("p");
    for(let i=0; i<LIST.length; i++){
        let frase=LIST[i].innerHTML;
        allTasks.push(frase);
    }
    checkedS = [];
    const STATUS = document.querySelectorAll("input[type='checkbox']");
    for(let i=0; i<STATUS.length; i++){
        checkedS.push(STATUS[i].checked);
    }
}

//Funcion que crea los elementos para despues añadirlos
function createElementList(task, isDone){
    //Creamos elementos que despues uniremos
    let newTask = document.createElement("ol");
    let checkBox = document.createElement("input");
    let text = document.createElement("p");
    let link = document.createElement("a");
    let content = document.createTextNode(task);
    let dlt = document.createTextNode(" X "); 

    //Unimos los nodos
    link.appendChild(dlt);
    link.setAttribute("href","#")
    link.setAttribute("class","dlt");
    link.addEventListener("click",function(){
        this.parentNode.remove();
    })

    checkBox.setAttribute("type","checkbox");
    if(isDone){
        checkBox.click();
        text.setAttribute("class","done");
    }

    checkBox.addEventListener("change",function(){
        let status = this.parentNode.children[0].getAttribute("class");
        if(status === "undone" || status === null){
            this.parentNode.children[0].setAttribute("class","done");
        }else{
            this.parentNode.children[0].setAttribute("class","undone");
        }  
    })
    
    text.appendChild(content);
    newTask.appendChild(text);
    newTask.appendChild(checkBox);
    newTask.appendChild(link);

    //Actualizamos el array
    getTasks();

    //Recorremos el array de las tareas para ver si ya existe
    for(let i=0; i< allTasks.length; i++){
        if(allTasks[i]==task){
            alert("Esa tarea ya existe");
            return;
        }
    }
    
    //Añadimos a la lista la nueva tarea
    listTask.appendChild(newTask);
    //Establecemos el input vacio
    INPUT.value="";
}

//Borramos la lista entera 
function deleteAllTasks(){
        listTask.replaceWith(listTask = document.createElement("ul"));
        listTask.setAttribute("id", "list-task"); 
}

//Con esta funcion guardaremos todas las tareas en el localStorage del navegador
function saveAll(){
    getTasks();
    localStorage.setItem("TaskList", JSON.stringify(allTasks));
    localStorage.setItem("StatusList", JSON.stringify(checkedS));
    alert("All tasks saved")
}

//Va añadiendo palabra por palabra a lista
function addDefaultTask(task, isDone){
    let Dtask=task;
    createElementList(Dtask, isDone);
}

//Genera todas las palabras nuevas a a lista
function defaultTasks(){
    let defaultTasks=JSON.parse(localStorage.getItem("TaskList"));
    let defaultStatus=JSON.parse(localStorage.getItem("StatusList"));
    if(defaultTasks!=null){
        for(let i=0; i<defaultTasks.length;i++){
            addDefaultTask(defaultTasks[i], defaultStatus[i]);
        }
    }
}

//Borra la memoria del local Storage
function cleanMem(){
    localStorage.clear();
    alert("Local Storage has been cleaned");
}