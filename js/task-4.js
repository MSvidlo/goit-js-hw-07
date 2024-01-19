const myForm = document.querySelector('form.login-form');

myForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('input');
   
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            alert('All form fields must be filled in');
    
        }
  
        else {
            myForm.submit();
        }
    });
    const userEmail = myForm.elements.email.value.trim;
    const userPassword = myForm.elements.password.value.trim;
    const obj = {
        userEmail,
        userPassword
    }

    myForm.reset();
};

