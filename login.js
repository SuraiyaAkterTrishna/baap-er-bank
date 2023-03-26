document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if(email === 'sontan@gmail.com' && password === 'secret'){
        console.log('valid user');
    } 
    else{
        console.log('Invalid user');
    }
});
