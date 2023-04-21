var date =document.getElementById('date');
var clear = document.querySelector(".clear");
//Shows today date

const options = {weekday:'long',
                    month:'long',
                   day:'numeric' };

const today = new Date();
date.innerHTML = today.toDateString("en-us", options);



//clear list function

clear.addEventListener('click', function(){
    var child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }
})

//list function

document.querySelector('#push').onclick = 
function() {
    if(document.querySelector('.add-item input')
    .value.length == 0) {
        alert ("Please Enter A List")
    }else{
        document.querySelector('#list').innerHTML += `<div class="list">
        <span id = "listname">
        ${document.querySelector('.add-item input').value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>`;


        //delete function
        var current_list = document.querySelectorAll('.delete');
        for ( var i = 0; i < current_list.length; i++){
            current_list[i].onclick = function()  {
                this.parentNode.remove();
            }
        }


        //checked function
        var current_list = document.querySelectorAll('.list');
        for ( var i = 0; i < current_list.length; i++){
            current_list[i].onclick = function()  {
                this.classList.toggle('complete');
            }
        }
        //adding input reset function after adding
        document.querySelector('.add-item input')
        .value = "";
    }
}