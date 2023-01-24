let cvcHolder = document.getElementById('cvc-holder');
let cvc_input = document.getElementById('cvc-input');
let cardHolderName = document.getElementById('cardHolderName');
let cardNumber = document.getElementById('cardNumber');
let month = document.getElementById('month');
let year = document.getElementById('year');
let name_input = document.getElementById('name-input');
let number_input = document.getElementById('number-input');
let M_input = document.getElementById('M-input');
let Y_input = document.getElementById('Y-input');
let confirmBtn = document.getElementById('confirmBtn');
let expireDate = document.querySelector('#expire-date');
let completed_state = document.querySelector('.completed-state');

//this function will write cardHolderName,cardNumber,expire date and cvc on the card 
function myfunc(e){
    cardHolderName.innerHTML = name_input.value;
    cardNumber.innerHTML = number_input.value;
    month.innerHTML = M_input.value;
    year.innerHTML = Y_input.value;
    cvcHolder.innerHTML = cvc_input.value;
}



// defining error message variables
let nameErrorMessage = document.getElementById('nameError');
let cardNumberError = document.getElementById('cardNumberError');
let dateError = document.querySelector('#dateError');
let expire_m_y = document.getElementsByClassName('expire-m-y');
let cvcerror = document.querySelector('#cvcError');
let form = document.querySelector('form');

//running the myfunc function
setInterval(myfunc,100);

//validating input section 
confirmBtn.addEventListener('click',function(e){
    e.preventDefault();
    //alerting error message if the name field is empty
    if(name_input.value == ''){
        nameErrorMessage.classList.add('Error');
        nameErrorMessage.style.display = 'block';
        name_input.style.border = 'solid 2px  hsl(0, 100%, 66%)';
    }else{
        nameErrorMessage.style.display = 'none';
        name_input.style.border = 'solid hsl(270, 3%, 87%) 2px';
        //displaying the completed state only if there is no error
        form.style.display = 'none';
        completed_state.style.display = 'flex';
    }
    // alerting message if the cardNumber is empty or wrong format
    if(number_input.value == ''){
        cardNumberError.classList.add('Error');
        number_input.style.border = 'solid 2px hsl(0, 100%, 66%)';
        cardNumberError.style.display = 'block';
    }else{
        cardNumberError.style.display = 'none';
        number_input.style.border = 'solid 2px hsl(270, 3%, 87%)';
        //displaying the completed state only if there is no error
        form.style.display = 'none';
        completed_state.style.display = 'flex';
    }
    //looping throught the month and year fields then alerting if one of them or both are empty 
    for(let i=0; i<expire_m_y.length; i++){
        if(expire_m_y[i].value == ''){
            dateError.classList.add('Error');
            dateError.style.display = 'block';
            expire_m_y[i].style.border = 'solid 2px hsl(0, 100%, 66%)';
        }else{
            dateError.style.display = 'none';
            expire_m_y[i].style.border = 'solid 2px hsl(270, 3%, 87%)';
            //displaying the completed state only if there is no error
            form.style.display = 'none';
            completed_state.style.display = 'flex';
        }
    }
    //alerting if the cvc field is empty
    if(cvc_input.value == ''){
        cvcerror.style.display = 'block';
        cvcerror.classList.add('Error');
        cvc_input.style.border = 'solid 2px hsl(0, 100%,66%)';
    }else{
        cvcerror.style.display = 'none';
        cvc_input.style.border = 'solid 2px hsl(270, 3%, 87%)';
        //displaying the completed state only if there is no error
        form.style.display = 'none';
        completed_state.style.display = 'flex';
    }
   
    
})

// only a-z or A-Z are allowed in the card holder name field
function nameError(){
    if(!name_input.value.match(/^[a-z A-Z]+$/)){
        name_input.style.border = 'solid 2px hsl(0, 100%,66%)';
        nameErrorMessage.style.display = 'block';
        nameErrorMessage.classList.add('Error');
        nameErrorMessage.innerHTML = 'wrong format only letters are allowed';
    }
    else{
        nameErrorMessage.style.display = 'none';
        name_input.style.border = 'solid 2px hsl(270, 3%, 87%)';
    }
}
// validating cardNumber format and accepting numbers only
function numbersOnly(e){
    // card number format
    if(!number_input.value.match( /^[0-9]+$/)){
        cardNumberError.style.display = 'block';
        cardNumberError.innerHTML = 'wrong format only numbers is allowed';
        number_input.style.border = 'solid 2px  hsl(0, 100%,66%)'
        cardNumberError.classList.add('Error');
    }
    else{
        cardNumberError.style.display = 'none';
        number_input.style.border = 'solid 2px hsl(270, 3%, 87%)';
    }
}
//numbers only are allowed in the month field
function moError(){
    if(!M_input.value.match(/^[0-9]+$/)){
        dateError.style.display = 'block';
        M_input.style.border = 'solid 2px hsl(0, 100%,66%)';
        dateError.classList.add('Error');
        dateError.innerHTML = 'numbers only are allowed';
        dateError.style.marginLeft = '0';
    }
    else{
        dateError.style.display = 'none';
        M_input.style.border = 'solid 2px hsl(270, 3%, 87%)';
    }
}
//numbers only are allowed in the year field
function yeError(){
    if(!Y_input.value.match(/^[0-9]+$/)){
        dateError.style.display = 'block';
        Y_input.style.border = 'solid 2px hsl(0, 100%,66%)';
        dateError.style.marginLeft = '6.3rem';
        dateError.classList.add('Error');
        dateError.innerHTML = 'numbers only are allowed';
    }
    else{
        dateError.style.display = 'none';
        Y_input.style.border = 'solid 2px hsl(270, 3%, 87%)';
    }
}
//only numbers are allowed
function cError(){
    if(!cvc_input.value.match(/^[0-9]+$/)){
        cvcerror.style.display = 'block';
        cvc_input.style.border = 'solid 2px hsl(0, 100%,66%)';
        cvcerror.classList.add('Error');
        cvcerror.innerHTML = 'only numbers are allowed';
    }
    else{
        cvcerror.style.display = 'none';
        cvc_input.style.border = 'solid 2px hsl(270, 3%, 87%)';
    }
}

//if the continue-btn is clicked then every field will be empty as it was in default state
let continueBtn = document.getElementById('continue-btn');
continueBtn.addEventListener('click',()=>{
    completed_state.style.display = 'none';
    form.style.display = 'flex';
    name_input.value = '';
    number_input.value = '';
    M_input.value = '';
    Y_input.value = '';
    cvc_input.value = '';
})

    
   