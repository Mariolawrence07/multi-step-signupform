function next() {
if (document.querySelector('#user').value == '') {
    alert('Username is required!')
    return false;
} else { document.querySelector('.user-email').style.display = "none";
document.querySelector('.user-password').style.display = "block";
document.querySelector('#prev').style.display = "inline";
}
}

   
function prev() {
    document.querySelector('.user-email').style.display = "block";
    document.querySelector('.user-password').style.display = "none";
    document.querySelector('#prev').style.display = "none";
}

function handleChange(){
 if ( document.querySelector('#password').value == '') {
    document.querySelector('.next-prev').style.display = 'block';
    document.querySelector('#submit').style.display = 'none';
 } else{
    document.querySelector('.next-prev').style.display = 'none';
    document.querySelector('#submit').style.display = 'inline';
 }
 
}

function showPass() {
    event.preventDefault();
    let password = document.querySelector('#password');
    if (password.value != ''){
        password.type == 'password' ? password.type = 'text' : password.type = 'password';
        return false;
    }else {
        alert('nothing to show');
    }
    return false;

    }
