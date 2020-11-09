// Select form 

element = document.querySelector('#myForm');
element = document.forms['myForm'];
element = document.formSubmit;

// Get value of input

value = document.formSubmit.username.value; //text
value = document.formSubmit.password.value; //password
value = document.formSubmit.phonenumber.value; //number
value = document.formSubmit.family.value; //radio

 //checkbox
checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
let arr = [];
checkboxes.forEach(el=>{
    if(el.checked){
        arr.push(el.value);
    }
});

value = document.formSubmit.selectFamily.value; //select



// Validations

document.formSubmit.addEventListener('submit',(e)=>{
    e.preventDefault();    
    if(!checkInputs()){
        console.log('Form Not Submitted');
    }
    else{
        console.log('Form Submitted');
    }
});

function checkInputs(){
    let username = document.formSubmit.username;
    let password = document.formSubmit.password;

    if(username.value == ""){
        setError(username,'Username not present');
    }
    else if(username.value.length < 5){
        setError(username, 'Password of invalid length');
    }
    else{
        setSuccess(username);
    }

    if(password.value == ""){
        setError(password, 'Password not present');
    }
    else if(password.value.length < 5){
        setError(password, 'Password of invalid length');
    }
    else{
        setSuccess(password);
    }

    let elements = Array.from(document.querySelectorAll('.validation'));
    let finalArr = [];
    finalArr = elements.filter(el =>{
        return el.classList.contains('error');
    });
    if(finalArr.length == 0){
        return true;
    }
    else{
        return false;
    }    
}

function setError(element,message){
    element.className = 'validation error';
    element.parentElement.querySelector('small').textContent = message;
}

function setSuccess(element){
    element.className = 'validation success';
    element.parentElement.querySelector('small').textContent = '';
}