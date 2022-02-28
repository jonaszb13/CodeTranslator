function test() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById('outputfield').innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("Get", "get.php", true);
    xmlhttp.send();
}


//Store Login or Registration Form in session Storage

document.onload = logorreg(); 

function logorreg () {
    const loginForm = document.querySelector('#login');
    const createAccount = document.querySelector('#createAccount');

    if (sessionStorage.getItem('form') === 'login') {
        loginForm.classList.remove('form--hidden');
        createAccount.classList.add('form--hidden');
    } else if (sessionStorage.getItem('form') === 'reg') {
        loginForm.classList.add('form--hidden');
        createAccount.classList.remove('form--hidden');
    } else {
        return;
    }
}


//Show Error messages

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form__message');

    messageElement.textContent = message;
    messageElement.classList.remove('form__message--success', 'form__message--error');
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add('form__input--error');
    inputElement.parentElement.querySelector('.form__input-error-message').textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove('form__input--error');
    inputElement.parentElement.querySelector('.form__input-error-message').textContent = "";
}


//Change Login or Registartion Form

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login');
    const createAccount = document.querySelector('#createAccount');

    document.querySelector('#linkCreateAccount').addEventListener('click', e => {
        sessionStorage.setItem('form', 'reg');
        e.preventDefault();
        loginForm.classList.add('form--hidden');
        createAccount.classList.remove('form--hidden');
    })

    document.querySelector('#linkLogin').addEventListener('click', e => {
        sessionStorage.setItem('form', 'login');
        loginForm.classList.remove('form--hidden');
        createAccount.classList.add('form--hidden');
    })


    //Further Error Message and Username + Email checkup

    loginForm.addEventListener('submit', e => {
        e.preventDefault();

        setFormMessage(loginForm, 'error', "Ungültiger Benutername oder Passwort");
    })

    document.querySelectorAll('.form__input').forEach(inputElement => {
        
        inputElement.addEventListener('blur', e => {
            execute();
            function execute() {

            if (e.target.id === 'signupUsername' && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Der Benutzername muss mindestens 5 Zeichen lang sein!")
                disablebtnUser = true;
            }
            console.log(e.target.value.length + " + " + e.target.value.indexOf('@'))
            if (e.target.id === 'signupEmail' && e.target.value.length > 0 && e.target.value.indexOf('@') < 0) {
                setInputError(inputElement, "Bitte eine echte E-Mail Adress angeben!")
                disablebtnEmail = true;
            }
            passwordcompare()

        }
        })

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
            disablebtnUser = false;
            disablebtnEmail = false;
        })
    })

    //Check that both Passwords are the same

    function passwordcompare() {
        let firstpass = document.querySelector('#PassEntry')
        let secondpass = document.querySelector('#second_password')

        let inputEle = document.querySelector('#secpass')

        if (firstpass.value != secondpass.value && firstpass.value.length > 0 && secondpass.value.length >= 0) {
            console.log("firstpass = " + firstpass.value + "; secondpass = " + secondpass.value)
            inputEle.classList.add('from__input--error');
            inputEle.parentElement.querySelector('.form__input-error-message').textContent = "Beide Passwürter müssen übereinstimmen!"
            disablebtnPass = true;
        } else if (firstpass.value === secondpass.value && firstpass.value.length > 0 && secondpass.value.length > 0) {
            inputEle.classList.remove('from__input--error');
            inputEle.parentElement.querySelector('.form__input-error-message').textContent = '';
            disablebtnPass = false;
        }
    }

})

//Password checkup

let timeout;

let password = document.getElementById('PassEntry')
let strengthBadge = document.getElementById('StrengthDisp')

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))')


function StrengthChecker(PasswordParameter) {

    if (strongPassword.test(PasswordParameter)) {
        console.log('strong')
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if (mediumPassword.test(PasswordParameter)) {
        console.log('medium')
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
    } else {
        console.log('weak')
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }
}

password.addEventListener("input", () => {

    strengthBadge.style.display = 'block'
    clearTimeout(timeout);

    timeout = setTimeout(() => StrengthChecker(password.value), 5);

    if (password.value.length !== 0) {
        strengthBadge.style.display != 'block'
    } else {
        strengthBadge.style.display = 'none'
    }
});


//Toggle Password clear

const togglepassword = document.querySelector('#togglePassword');
const backpassword = document.querySelector('#password');

togglepassword.addEventListener('click', function (e) {
    const type = backpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    backpassword.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});

const togglepassword1 = document.querySelector('#togglePassword1');
const backpassword1 = document.querySelector('#PassEntry');

togglepassword1.addEventListener('click', function (e) {
    const type = backpassword1.getAttribute('type') === 'password' ? 'text' : 'password';
    backpassword1.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});

const togglepassword2 = document.querySelector('#togglePassword2');
const backpassword2 = document.querySelector('#second_password');

togglepassword2.addEventListener('click', function (e) {
    const type = backpassword2.getAttribute('type') === 'password' ? 'text' : 'password';
    backpassword2.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});

