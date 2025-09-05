const inputbox=document.getElementById("input-box"); 
const listContainer=document.getElementById("list-container"); 
function addtask(){
    if(inputbox.value === ''){
    alert("write something to add");
    }
    else{
    let li=document.createElement("li");
    li.innerHTML= inputbox.value;
    listContainer.appendChild(li);
    let span= document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }
    inputbox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName=== "LI"){
     e.target.classlist.toggle("checked");
     saveData();
    }
    else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
    }

},false);

function saveData(){
    localStorage.getItem("data",listContainer.innerHTML);
}
function showdata(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showdata();