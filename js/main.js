
//cerca una mail 
const mail = ['stef@mail.it','luca@mail.it','giacomo@mail.it','chiara.mail.it'];
console.log(mail);

//refe
const inputMail = document.getElementById('mail');
const btn = document.querySelector('.btn');

//evento 
btn.addEventListener ('click', function() {
    //ottenere valore
    const userMail = inputMail.value.trim().toLowerCase();
    console.log('seclta mail',userMail);

    if (userMail === '') {
        alert('Attenzione inserire una mail');
    } else {
        //presenza mail
        let mailFound = false 

        for (let i = 0; i < mail.length; i++) {
            //console.log(mail[i]);

            if (mail[i] === userMail) {
                mailFound = true;
                break;
            }
        }
        console.log(mailFound);

        // output, accesso
        if (mailFound === true) {
            document.getElementById('accesso').innerHTML =`Welcome ${userMail}`
        } else {
            alert('accesso negato')
        }
    }
});

