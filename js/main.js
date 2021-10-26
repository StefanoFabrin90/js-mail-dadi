
//cerca una mail 
const mail = ['stef@mail.it','luca@mail.it','giacomo@mail.it'];
console.log(mail);

//refe
const inputMail = document.getElementById('mail');
const btn = document.querySelector('.btn');

//evento 
btn.addEventListener ('click', function(){
    //ottenere valore
    const userMail = inputMail.value.trim();
    //console.log(userMail);

    if (userMail === '') {
        alert('Attenzione inserire una mail');
    } 
});

