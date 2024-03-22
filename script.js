/************************Get Data*****************************/  
let firstNameInput = document.getElementById("first-name");
let lastNameInput = document.getElementById("last-name");
let messageTextarea = document.getElementById("message");
let divComment = document.getElementById("div-comment");
let identity = document.getElementById("identity");
let comment = document.getElementById("comment");
let errorMessage = document.querySelector("#error-message");
let form = document.querySelector("form");


/************Delete Data*************/
function deleteForm(){
firstNameInput.value = "";
lastNameInput.value = "";
messageTextarea.value = "";
}

/********************** Add Data********************************/
function validateForm() {  
let userIdentity1 = document.createTextNode(firstNameInput.value);
let userIdentity2 = document.createTextNode(lastNameInput.value);
let newMessage = document.createTextNode(messageTextarea.value);
let space = document.createTextNode(" ");
identity.appendChild(userIdentity1);
identity.appendChild(space);
identity.appendChild(userIdentity2);
comment.appendChild(newMessage);
divComment.style.display="block";
deleteForm();
};

/**********************Submit Data*****************************/
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(firstNameInput.value == "" || lastNameInput.value == "" || messageTextarea.value == "")
    {
        errorMessage.style.display="block"; 
    }
    else if(!firstNameInput.value.match(/^[a-zA-Z]/) || !lastNameInput.value.match(/^[a-zA-Z]/)){
        alert("Le nom et prénom ne peuvent contenir que des lettres !");
        deleteForm();
    }
    else{
    validateForm();
    errorMessage.style.display="none";   
   }   
});

let btn = document.querySelector(button)

document.querySelector("button").addEventListener('click' , function(norefresh) {
    norefresh.preventDefault();
    btn.onclick = function(){checkbox()}
});

//creation de la fonction check box pour controler que les élément ne soit pas vides
function checkbox(firstname,lastname,message){
    if (firstname--){
        alert('le champ premon est vide');
        return false;
    }
    if (lastname--){
        alert('le champ nom est vide');
        return false;
    }
    if (message--){
        alert('le champ message est vide');
        return false;
    }
}   