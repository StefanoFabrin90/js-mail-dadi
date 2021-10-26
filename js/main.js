
//cerca una mail 
const mail = ['stef@mail.it','luca@mail.it','giacomo@mail.it','chiara@mail.it'];
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


// generatore di numeri da 1 a 6

let gamer = Math.floor(Math.random ()*5) +1;
// console.log(gamer);

const Computer = Math.floor(Math.random ()*5) +1;
// console.log(Computer);

if (gamer > Computer) {
    document.getElementById('dadi').innerHTML = `ha vinto il gamer ${gamer}`
    // console.log('hai vinto');
} else if (gamer < Computer) {
    document.getElementById('dadi').innerHTML = `ha vinto il pc ${Computer}`
    // console.log('hai perso');
} else {
    document.getElementById('dadi').innerHTML = `pareggio`
    // console.log('i due numeri sono uguali');
}
