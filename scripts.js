// UI elements selectors
let postal = document.querySelector('#postal');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');

// Add Event Listener
postal.addEventListener('click',validation);
phone.addEventListener('click',validation);
email.addEventListener('click',validation);

// Functions
function validation(e){
    let id;
    let input;
    let postalExp = /^[0-9]{4}$/;
    let phoneExp = /^(\+)?(88)?01[0-9]{9}$/;
    let emailExp = /^[a-zA-Z0-9._]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
    if(e.target.id == 'postal'){
        id = 0;
    }else if(e.target.id == 'phone'){
        id = 1;
    }else if(e.target.id == 'email'){
        id = 2;
    }
    switch (id) {
        case 0: input = parseInt(prompt('Enter your postal code: '));
            if(postalExp.test(input)){
                alert('Your postal code is valid.');
            }else{
                alert('Your postal code is not valid.');
            }
        break;

        case 1: input = prompt('Enter your phone number: ');
        if(phoneExp.test(input)){
            alert('Your your phone number is valid.');
        }else{
            alert('Your your phone number is not valid.');
        }
        break;

        case 2: input = prompt('Enter your email address: ');
        if(emailExp.test(input)){
            alert('Your your email address is valid.');
        }else{
            alert('Your your email address is not valid.');
        }
        break;
    
        default:
        break;
    }
}
