function showPassword(){
    const eye = document.getElementById('eye')
    const eyeslash = document.getElementById('eye-slash')
    const passwordfield = document.getElementById('password')

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeslash.style.display = 'none'
        passwordfield.type = 'text';
        hidePassword;
    }else{
        eye.style.display = 'none';
        eyeslash.style.display = 'block'
        passwordfield.type = 'password';
    }
}
