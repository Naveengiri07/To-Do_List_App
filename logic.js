let addButton = document.getElementById('addButton');
let input = document.getElementById('inputField');
let toDoContainer = document.getElementById('container');
var count = 0;

function add(){
    var mainBox = document.createElement("div");
    mainBox.setAttribute('id',`box${count}`);
    mainBox.classList.add('box');
    toDoContainer.appendChild(mainBox);
    
    var paragraph = document.createElement("p");
    paragraph.innerText = input.value;
    mainBox.appendChild(paragraph);

    mainBox.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })
    
    var removeButton = document.createElement("button");
    removeButton.classList.add('removeButton');
    removeButton.setAttribute('id','remove');
    removeButton.addEventListener('click',function(event){
        console.log(event.target.parentNode.id);
        let boxId = event.target.parentNode.id;
        document.getElementById(boxId).remove();
    });
   
    removeButton.innerHTML=
    "Remove" ;
    mainBox.appendChild(removeButton);

    input.value="";
    count++;
}

// function remove(event){
    //document.getElementById(`box${count}`).remove();
  //  console.log(event.target.parentNode.id);
//}