const scriptURL = 'https://script.google.com/macros/s/AKfycbxjG4q6_0T5w8NY7wmxAAQmnJOq10cR9SFcjqjPh8Gqw6HnZW7efEM7DdoYz-RSgK_lkg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank's for Messaging i will get back to you soon..."
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})