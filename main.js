const generate = document.getElementById('generate');
const emailList = document.getElementById('email-list');

generate.addEventListener('click', function () {
    emailList.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => response.json())
        .then(data => {
            emailList.innerHTML += `<li class="list-group-item">${data.response}</li>`;
        })
        .catch(error => {
            console.error('Errore nel recupero dell\'email:', error);
        });
    }
});
