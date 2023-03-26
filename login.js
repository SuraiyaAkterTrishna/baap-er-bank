document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if(email === 'sontan@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html'
    } 
    else{
        alert('Tui password vule gesos!!! Toke tejjo sontan ghosona kora holo!!');
    }
});
