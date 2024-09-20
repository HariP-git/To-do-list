const inputbox =document.getElementById("input-box");
let  listcontainer =document.getElementById("list-container");
function addtask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    inputbox.value='';
    savedata();
}



listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {  // Use uppercase "LI" for tagName comparison
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {  // Use uppercase "SPAN" for tagName comparison
        e.target.parentElement.remove();
        savedata();
    }
}, false);



function savedata(){
  localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
  listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();
